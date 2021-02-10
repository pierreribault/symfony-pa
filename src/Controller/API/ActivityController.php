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
    /**
     * @Route("/", name="_index", methods={"GET"})
     * @param Request $request
     * @return JsonResponse
     */
    public function index(Request $request, ActivityRepository $activityRepository): JsonResponse
    {
        $activities = $activityRepository->findAll();
        $data = [];

        foreach ($activities as $acticity) {
            $data[] = [
                'id' => $acticity->getId(),
                'name' => $acticity->getName(),
                'address' => $acticity->getAddress(),
                'phone' => $acticity->getPhone(),
                'longitude' => $acticity->getLongitude(),
                'latitude' => $acticity->getLatitude(),
                'marker' => $acticity->getCategories()[0]->getUrl(),
            ];
        }
        
        return $this->json($data);
    }
}
 