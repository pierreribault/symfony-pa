<?php

namespace App\Controller\Admin;

use App\Entity\Category;
use App\Entity\City;
use App\Entity\RoadTrip;
use App\Form\Admin\RoadTripType;
use App\Repository\RoadTripRepository;
use App\Service\Pagination;
use Doctrine\ORM\EntityManagerInterface;
use FOS\RestBundle\Controller\Annotations as Rest;
use FOS\RestBundle\Request\ParamFetcherInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/road/trip")
 */
class RoadTripController extends AbstractController
{
    /**
     * @Rest\QueryParam(name="sort", default="id", requirements="id")
     * @Rest\QueryParam(name="direction", default="asc", requirements="asc|desc")
     * @Rest\QueryParam(name="page", default=1, requirements="\d+")
     * @Rest\QueryParam(name="limit", default=Pagination::DEFAULT_LIMIT, requirements="\d+")
     * @Route("/", name="road_trip_index", methods={"GET"})
     */
    public function index(RoadTripRepository $roadTripRepository, ParamFetcherInterface $paramFetcher, PaginatorInterface $paginator): Response
    {
        $pagination = Pagination::paginate($roadTripRepository->createQueryBuilder("c"), $paginator, $paramFetcher);

        return $this->render('admin/road_trip/index.html.twig', [
            'road_trips' => $pagination->getItems(),
            'pagination' => $pagination,
        ]);
    }

    /**
     * @Route("/new", name="road_trip_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $roadTrip = new RoadTrip();
        $form = $this->createForm(RoadTripType::class, $roadTrip);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($roadTrip);
            $entityManager->flush();

            return $this->redirectToRoute('admin_road_trip_index');
        }

        return $this->render('admin/road_trip/new.html.twig', [
            'road_trip' => $roadTrip,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="road_trip_show", methods={"GET"})
     */
    public function show(RoadTrip $roadTrip, EntityManagerInterface  $entityManager): Response
    {
        return $this->render('admin/road_trip/show.html.twig', [
            'road_trip' => $roadTrip,
            'ulid' => $this->generateUrl('front_roadtrip_restore', ['ulid' => $roadTrip->getUlid()], 0),
        ]);
    }

    /**
     * @Route("/{id}/edit", name="road_trip_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, RoadTrip $roadTrip): Response
    {
        $form = $this->createForm(RoadTripType::class, $roadTrip);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('admin_road_trip_index');
        }

        return $this->render('admin/road_trip/edit.html.twig', [
            'road_trip' => $roadTrip,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="road_trip_delete", methods={"DELETE"})
     */
    public function delete(Request $request, RoadTrip $roadTrip): Response
    {
        if ($this->isCsrfTokenValid('delete'.$roadTrip->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($roadTrip);
            $entityManager->flush();
        }

        return $this->redirectToRoute('admin_road_trip_index');
    }
}
