<?php

namespace App\Controller\Front;

use App\Entity\ForumThread;
use App\Repository\ForumThreadRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class ForumController extends AbstractController
{
    /**
     * @Route("/forum", name="forum")
     */
    public function forum(ForumThreadRepository $forumThreadRepository)
    {
        return $this->render('front/forum/forum.html.twig', [
            'threads' => $forumThreadRepository->findAll()
        ]);
    }
}
