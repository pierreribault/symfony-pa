<?php

namespace App\Controller\Front;

use App\Repository\ActivityRepository;
use App\Repository\CategoryRepository;
use App\Repository\CityRepository;
use App\Repository\RoadTripRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;


class GeneratorController extends AbstractController
{
    /**
     * @Route("/generator", name="generator")
     */
    public function index(Request $request, CityRepository $cityRepository, CategoryRepository $categoryRepository): Response
    {
        $cities = $cityRepository->findAll();
        $categories = $categoryRepository->findAll();

        if ($request->get('arrival') && $request->get('departure')) {
            return $this->render('generator/index.html.twig', [
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
     * @Route("/generator/{ulid}", name="generator_restore")
     */
    public function restore(Request $request, ActivityRepository $activityRepository, RoadTripRepository $roadTripRepository, CityRepository $cityRepository, CategoryRepository $categoryRepository): Response
    {
        $roadTrip = $roadTripRepository->findOneBy(["ulid" => $request->attributes->get('ulid')]);
        $cities = $cityRepository->findAll();
        $categories = $categoryRepository->findAll();

        if ($roadTrip) {
            return $this->render('generator/restore.html.twig', [
                'departure' => $roadTrip->getDeparture(),
                'arrival' => $roadTrip->getArrival(),
                'activities' => $roadTrip->getActivities()->getValues(),
                'cities' => $cities,
                'categories' => $categories
            ]);
        }

        return $this->redirectToRoute("front_home");
    }
}
