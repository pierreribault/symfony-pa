<?php

namespace App\Controller\Front;

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

        return $this->redirectToRoute("front_home");
    }
}
