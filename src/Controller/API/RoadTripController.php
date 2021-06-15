<?php

namespace App\Controller\API;

use App\Entity\RoadTrip;
use App\Repository\ActivityRepository;
use App\Repository\RoadTripRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class RoadTripController
 * @Route("/roadtrip", name="_roadtrip")
 */
class RoadTripController extends AbstractController
{
    /**
     * @Route("/", name="_index", methods={"POST"})
     * @param Request $request
     * @param RoadTripRepository $roadTripRepository
     * @param ActivityRepository $activityRepository
     * @return JsonResponse
     */
    public function store(Request $request, RoadTripRepository $roadTripRepository, ActivityRepository $activityRepository): JsonResponse
    {
        $departure = strtolower($request->request->get('departure'));
        $arrival = strtolower($request->request->get('arrival'));
        $activities = $request->request->get('activities');

        $roadTrip = (new RoadTrip())
            ->setArrival($arrival)
            ->setDeparture($departure);

        foreach ($activities as $activity) {
            $activity = $activityRepository->find($activity);

            $roadTrip->addActivity($activity);
        }

        $this->getDoctrine()->getManager()->persist($roadTrip);
        $this->getDoctrine()->getManager()->flush();

        return $this->json([
            "ulid" => $roadTrip->getUlid(),
        ]);
    }
}
