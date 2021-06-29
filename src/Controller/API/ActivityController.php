<?php

namespace App\Controller\API;

use App\Repository\ActivityRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class ActivityController
 * @Route("/activities", name="_activity")
 */
class ActivityController extends AbstractController
{
    const LATITUDE_1DEGREE_KM = 111;

    /**
     * @Route("/", name="_index", methods={"POST"})
     * @param Request $request
     * @param ActivityRepository $activityRepository
     * @return JsonResponse
     */
    public function index(Request $request, ActivityRepository $activityRepository): JsonResponse
    {
        $category = $request->request->get('category');
        $city = $request->request->get('city');
        $fromLatitude = $request->request->get('fromLatitude');
        $fromLongitude = $request->request->get('fromLongitude');
        $toLatitude = $request->request->get('toLatitude');
        $toLongitude = $request->request->get('toLongitude');
        $rayon = $request->request->get('rayon');

        $variationLatitude = $rayon / self::LATITUDE_1DEGREE_KM;
        $variationFromLongitude = $rayon / (self::LATITUDE_1DEGREE_KM * cos($fromLatitude));
        $variationToLongitude = $rayon / (self::LATITUDE_1DEGREE_KM * cos($toLatitude));

        if ($fromLatitude - $toLatitude > 0) {
            $fromLatitude += $toLatitude;
            $toLatitude = $fromLatitude - $toLatitude;
            $fromLatitude -= $toLatitude;
        }

        $fromLatitude -= $variationLatitude;
        $toLatitude += $variationLatitude;

        if ($fromLongitude - $toLongitude > 0) {
            $fromLongitude += $variationFromLongitude;
            $toLongitude -= $variationToLongitude;

            $fromLatitude += $toLongitude;
            $toLongitude = $fromLatitude - $toLongitude;
            $fromLongitude -= $toLongitude;
        } else {
            $fromLongitude -= $variationFromLongitude;
            $toLongitude += $variationToLongitude;
        }

        $activities = $activityRepository->findWithFilters($category, $city, $fromLongitude, $fromLatitude, $toLongitude, $toLatitude);

        $data = [];

        foreach ($activities as $activity) {
            $data[] = ['id' => $activity->getId()];
        }

        return $this->json($data);
    }

    /**
     * @Route("/{id}", name="_search", methods={"GET"})
     * @param Request $request
     * @param ActivityRepository $activityRepository
     * @return JsonResponse
     */
    public function show(Request $request, ActivityRepository $activityRepository): JsonResponse
    {
        $activity = $activityRepository->findOneBy(['id' => $request->attributes->get('id')]);

        return $this->json([
            'html' => $this->renderView('api/activity.html.twig', [
                'activity' => $activity
            ]),
            'data' => [
                'latitude' => $activity->getLatitude(),
                'longitude' => $activity->getLongitude(),
                'marker' => $activity->getCategories()[0]->getUrl(),
            ]
        ]);
    }
}
