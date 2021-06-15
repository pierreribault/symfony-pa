<?php

namespace App\Controller\Front;

use App\Repository\ActivityRepository;
use App\Repository\CategoryRepository;
use App\Repository\CityRepository;
use App\Repository\RoadTripRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;


class RoadTripController extends AbstractController
{
    /**
     * @Route("/roadtrip", name="roadtrip")
     */
    public function index(Request $request, CityRepository $cityRepository, CategoryRepository $categoryRepository): Response
    {
        $cities = $cityRepository->findAll();
        $categories = $categoryRepository->findAll();

        if ($request->get('arrival') && $request->get('departure')) {
            return $this->render('front/roadtrip/index.html.twig', [
                'controller_name' => 'GeneratorController',
                'departure' => $request->get('departure'),
                'arrival' => $request->get('arrival'),
                'cities' => $cities,
                'categories' => $categories
            ]);
        }

        return $this->redirectToRoute("front_home");
    }

    /**
     * @Route("/roadtrip/{ulid}", name="roadtrip_restore")
     */
    public function restore(Request $request, ActivityRepository $activityRepository, RoadTripRepository $roadTripRepository, CityRepository $cityRepository, CategoryRepository $categoryRepository): Response
    {
        $roadTrip = $roadTripRepository->findOneBy(["ulid" => $request->attributes->get('ulid')]);
        $cities = $cityRepository->findAll();
        $categories = $categoryRepository->findAll();

        if ($roadTrip) {
            return $this->render('front/roadtrip/restore.html.twig', [
                'departure' => $roadTrip->getDeparture(),
                'arrival' => $roadTrip->getArrival(),
                'activities' => $roadTrip->getActivities()->getValues(),
                'cities' => $cities,
                'categories' => $categories
            ]);
        }

        return $this->redirectToRoute("front_home");
    }

    /**
     * @IsGranted("IS_AUTHENTICATED_FULLY")
     * @Route("/roadtrip/{ulid}/details", name="roadtrip_details")
     */
    public function details(Request $request, RoadTripRepository $roadTripRepository)
    {
        $roadTrip = $roadTripRepository->findOneBy(["ulid" => $request->attributes->get('ulid')]);

        if (!$roadTrip->getAuthor()) {
            $roadTrip->setAuthor($this->getUser());

            $this->getDoctrine()->getManager()->persist($roadTrip);
            $this->getDoctrine()->getManager()->flush();
        }

        return $this->render('front/roadtrip/details.html.twig', [
            'share' => $this->generateUrl('front_roadtrip_restore', ['ulid' => $roadTrip->getUlid()], 0),
            'departure' => $roadTrip->getDeparture(),
            'arrival' => $roadTrip->getArrival(),
            'activities' => $roadTrip->getActivities()->getValues(),
        ]);
    }
}
