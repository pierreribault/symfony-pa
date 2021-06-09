<?php

namespace App\Controller\Front;

use App\Repository\CategoryRepository;
use App\Repository\CityRepository;
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
                'cities' => $cities,
                'categories' => $categories
            ]);
        }

        return $this->redirectToRoute("front_home");
    }
}
