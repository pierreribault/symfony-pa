<?php

namespace App\Controller\Admin;

use App\Entity\RoadTrip;
use App\Form\Admin\RoadTripType;
use App\Repository\RoadTripRepository;
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
     * @Route("/", name="road_trip_index", methods={"GET"})
     */
    public function index(RoadTripRepository $roadTripRepository): Response
    {
        return $this->render('admin/road_trip/index.html.twig', [
            'road_trips' => $roadTripRepository->findAll(),
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
    public function show(RoadTrip $roadTrip): Response
    {
        return $this->render('admin/road_trip/show.html.twig', [
            'road_trip' => $roadTrip,
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
