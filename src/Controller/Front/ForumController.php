<?php

namespace App\Controller\Front;

use App\Entity\ForumThread;
use App\Repository\ForumThreadRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Knp\Component\Pager\PaginatorInterface;

class ForumController extends AbstractController
{
    /**
     * @Route("/forum", name="forum")
     */
    public function forum(Request $request, PaginatorInterface $paginator, ForumThreadRepository $forumThreadRepository)
    {

        $data = $forumThreadRepository->findBy([],['createdAt' => 'desc']);

        $threads = $paginator->paginate(
            $data,
            $request->query->getInt('page', 1), // Numéro de la page en cours, passé dans l'URL, 1 si aucune page
            50 // Nombre de résultats par page
        );

        return $this->render('front/forum/forum.html.twig', [
            'threads' => $threads
        ]);
    }
}
