<?php


namespace App\Controller\Front;


use App\Entity\Activity;
use App\Form\Front\ActivityType;
use App\Repository\ActivityRepository;
use App\Service\Pagination;
use FOS\RestBundle\Controller\Annotations as Rest;
use FOS\RestBundle\Request\ParamFetcher;
use Knp\Component\Pager\PaginatorInterface;
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
     * @return Response
     * @Rest\QueryParam(name="sort", default="id", requirements="id")
     * @Rest\QueryParam(name="direction", default="asc", requirements="asc|desc")
     * @Rest\QueryParam(name="page", default=1, requirements="\d+")
     * @Rest\QueryParam(name="limit", default=Pagination::DEFAULT_LIMIT, requirements="\d+")
     * @Route("/", name="_all", methods={"GET"})
     */
    public function getAll(Request $request, ActivityRepository $activityRepository, ParamFetcher $paramFetcher, PaginatorInterface $paginator)
    {
        $activities = $activityRepository->findBy(["company" => $this->getUser()->getCompany()]);
        return $this->render("front/activity/index.html.twig", [
            "pagination" => Pagination::paginate($activities, $paginator,$paramFetcher)
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

        return $this->render("front/activity/new.html.twig", [
            "form" => $form->createView(),
            "activity" => $activity
        ]);
    }

    /**
     * @Route("/{id}", name="_show", methods={"GET"})
     */
    public function show(Activity $activity)
    {
        $this->isGranted("POST_VIEW", $activity);
        return $this->render("front/activity/show.html.twig", [
            "activity" => $activity
        ]);
    }

    /**
     * @IsGranted("ROLE_COMPANY")
     * @Route("/{id}/edit}", name="_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Activity $activity)
    {
        $this->isGranted("POST_EDIT", $activity);
        $form = $this->createForm(ActivityType::class, $activity);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()){
            $this->getDoctrine()->getManager()->flush();

            foreach ($activity->getImages() as $image) {
                if (is_null($image->getImage())) {
                    $this->getDoctrine()->getManager()->remove($image);
                }
            }
            $this->getDoctrine()->getManager()->flush();
            return $this->redirectToRoute("front_app_activity_all");
        }

        return $this->render("front/activity/edit.html.twig", [
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
        $this->isGranted("POST_DELETE", $activity);
        if ($this->isCsrfTokenValid('delete'.$activity->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($activity);
            $entityManager->flush();
        }

        return $this->redirectToRoute('front_app_activity_all');
    }
}
