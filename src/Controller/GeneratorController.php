<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;


class GeneratorController extends AbstractController
{
    /**
     * @Route("/generator", name="generator")
     */
    public function index(Request $request): Response
    {
        if ($request->get('arrival') && $request->get('departure')) {
            return $this->render('generator/index.html.twig', [
                'controller_name' => 'GeneratorController',
            ]);
        }
    }

    /**
     * @Route("/generator/{departure}/{arrival}", name="create")
     */
    public function create(string $departure, string $arrival): Response
    {
        return $this->render('generator/index.html.twig', [
            'controller_name' => 'GeneratorController',
            'departure' => $departure,
            'arrival' => $arrival
        ]);
    }
}
