<?php


namespace App\Controller\Front;


use App\Entity\Activity;
use App\Form\ActivityType;
use App\Repository\ActivityRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class ActivityController
 * @package App\Controller\Front
 * @IsGranted("IS_AUTHENTICATED_FULLY")
 * @Route("/activity", name="app_activity")
 */
class ActivityController extends AbstractController
{

    /**
     * @param Request $request
     * @param ActivityRepository $activityRepository
     * @Route("/", name="_all", methods={"GET"})
     */
    public function getAll(Request $request, ActivityRepository $activityRepository)
    {
        $activities = $activityRepository->findBy(["company" => $this->getUser()->getCompany()]);
        return $this->render("activity/index.html.twig", [
            "activities" => $activities
        ]);
    }

    /**
     * @IsGranted("ROLE_COMPANY")
     * @Route("/new", name="_new", methods={"GET","POST"})
     */
    public function new(Request $request)
    {
        $activity = new Activity();
        $form = $this->createForm(ActivityType::class, $activity);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()){

            $activity->setCompany($this->getUser()->getCompany());

            foreach ($activity->getImages() as $image) {
                $image->setActivity($activity);
            }

            foreach ($activity->getCategories() as $category) {
                $category->addActivity($activity);
            }

            $this->getDoctrine()->getManager()->persist($activity);
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute("front_app_activity_all");
        }

        return $this->render("activity/new.html.twig", [
            "form" => $form->createView()
        ]);
    }

    /**
     * @Route("/{id}", name="_show", methods={"GET"})
     */
    public function show(Activity $activity)
    {
        return $this->render("activity/show.html.twig", [
            "activity" => $activity
        ]);
    }

    /**
     * @IsGranted("ROLE_COMPANY")
     * @Route("/{id}/edit}", name="_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Activity $activity)
    {
        $form = $this->createForm(ActivityType::class, $activity);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()){
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute("front_app_activity_all");
        }

        return $this->render("activity/edit.html.twig", [
            "form" => $form->createView(),
            "activity" => $activity
        ]);
    }

    /**
     * @IsGranted("ROLE_COMPANY")
     * @Route("/{id}/delete", name="_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Activity $activity): Response
    {
        if ($this->isCsrfTokenValid('delete'.$activity->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($activity);
            $entityManager->flush();
        }

        return $this->redirectToRoute('front_app_activity_all');
    }
}
