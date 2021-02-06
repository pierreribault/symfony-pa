<?php

namespace App\Controller\API;

use App\Entity\City;
use App\Repository\CityRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class CitiesController extends AbstractController
{
    /**
     * @Route("/cities/search", name="cities.search", methods={"POST"})
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
