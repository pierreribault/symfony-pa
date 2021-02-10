<?php

namespace App\Controller\API;

use App\Entity\City;
use App\Repository\CityRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class CityController
 * @Route("/cities", name="_cities")
 */
class CityController extends AbstractController
{
    /**
     * @Route("/search", name="_search", methods={"POST"})
     * @param Request $request
     * @return JsonResponse
     */
    public function index(Request $request): JsonResponse
    {
        /** @var CityRepository $repository */
        $repository = $this->getDoctrine()->getRepository(City::class);

        return $this->json(
            $repository->findCitiesByQuerySearch(
                $request->get('query') ?? null
            )
        );
    }
}
