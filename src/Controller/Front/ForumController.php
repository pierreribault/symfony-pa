<?php

namespace App\Controller\Front;

use App\Entity\ForumThread;
use App\Repository\ForumThreadRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\Form\Extension\Core\Type\SearchType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;

class ForumController extends AbstractController
{
    /**
     * @Route("/forum", name="forum", methods={"GET", "POST"})
     */
    public function forum(Request $request, PaginatorInterface $paginator, ForumThreadRepository $forumThreadRepository)
    {
        // SEARCH
        $form = $this->createFormBuilder(null)
            ->add('search', SearchType::class, [
                'attr' => [
                    'class' => 'border-silver border rounded-full hover:border-eden',
                    'placeholder' => 'Search'
                ],
                'required' => false
            ])
            ->add('submit', SubmitType::class, [
                'label' => false,
                'attr' => [
                    'class' => 'text-silver'
                ]
            ])
            ->setMethod('GET')
            ->getForm();
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid() && $form->get('search') !== "") {
            $data = $forumThreadRepository->findByTitle($form->get('search')->getData());
        } else {
            $data = $forumThreadRepository->findBy([], ['createdAt' => 'desc']);
        }

        $threads = $paginator->paginate(
            $data,
            $request->query->getInt('page', 1), // Numéro de la page en cours, passé dans l'URL, 1 si aucune page
            25 // Nombre de résultats par page
        );

        return $this->render('front/forum/forum.html.twig', [
            'threads' => $threads,
            'search_form' => $form->createView()
        ]);
    }
}
