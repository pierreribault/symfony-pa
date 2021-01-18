<?php

namespace App\Controller\Front;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class ForumController extends AbstractController
{
    /**
     * @Route("/forum", name="forum")
     */
    public function forum()
    {
        return $this->render('front/forum/forum.html.twig', [
            'controller_name' => 'ForumController',
        ]);
    }
}
