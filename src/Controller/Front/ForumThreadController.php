<?php

namespace App\Controller\Front;

use App\Entity\ForumThread;
use App\Entity\ForumThreadAnswer;
use App\Entity\Like;
use App\Form\ForumThreadType;
use App\Form\ForumThreadAnswerType;
use App\Repository\ForumThreadRepository;
use App\Repository\ForumThreadAnswerRepository;
use App\Repository\LikeRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Knp\Component\Pager\PaginatorInterface;

/**
 * @Route("/forum/thread")
 */
class ForumThreadController extends AbstractController
{
    /**
     * @Route("/", name="forum_thread_index", methods={"GET"})
     */
    public function index(ForumThreadRepository $forumThreadRepository): Response
    {
        return $this->render('front/forum_thread/index.html.twig', [
            'forum_threads' => $forumThreadRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="forum_thread_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $forumThread = new ForumThread();
        $form = $this->createForm(ForumThreadType::class, $forumThread);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $forumThread->setAuthor($this->getUser());
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($forumThread);
            $entityManager->flush();

            return $this->redirectToRoute('front_forum_thread_show', ['id' => $forumThread->getId()]);
        }

        return $this->render('front/forum_thread/new.html.twig', [
            'forum_thread' => $forumThread,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="forum_thread_show", methods={"GET","POST"})
     */
    public function show(Request $request, PaginatorInterface $paginator, ForumThread $forumThread, ForumThreadRepository $forumThreadRepository, ForumThreadAnswerRepository $forumThreadAnswerRepository): Response
    {

        // PAGINATION
        $data = $forumThreadAnswerRepository->findBy([
            "forumThread" => $forumThread
        ], ['createdAt' => 'asc']);

        $answers = $paginator->paginate(
            $data,
            $request->query->getInt('page', 1), // Numéro de la page en cours, passé dans l'URL, 1 si aucune page
            25 // Nombre de résultats par page
        );

        // ANSWER FORM
        $forumThreadAnswer = new ForumThreadAnswer();
        $form = $this->createForm(ForumThreadAnswerType::class, $forumThreadAnswer);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $forumThreadAnswer->setAuthor($this->getUser());
            $forumThreadAnswer->setForumThread($forumThreadRepository->findOneBy([
                "id" => $forumThread->getId()
            ]));
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($forumThreadAnswer);
            $entityManager->flush();

            return $this->redirectToRoute('front_forum_thread_show', ['id' => $forumThread->getId()]);
        }

        return $this->render('front/forum_thread/show.html.twig', [
            'forum_thread' => $forumThread,
            'forum_thread_answers' => $answers,
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/{id}/edit", name="forum_thread_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, ForumThread $forumThread): Response
    {
        $form = $this->createForm(ForumThreadType::class, $forumThread);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('front_forum_thread_show', ['id' => $forumThread->getId()]);
        }

        return $this->render('front/forum_thread/edit.html.twig', [
            'forum_thread' => $forumThread,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="forum_thread_delete", methods={"DELETE"})
     */
    public function delete(Request $request, ForumThread $forumThread): Response
    {
        if ($this->isCsrfTokenValid('delete'.$forumThread->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($forumThread);
            $entityManager->flush();
        }

        return $this->redirectToRoute('front_forum');
    }

    /**
     * @Route("/{id}/likeThread", name="forum_thread_like", methods={"POST"})
     */
    public function likeThread(Request $request, ForumThread $forumThread): Response
    {
        if ($this->isCsrfTokenValid('like'.$forumThread->getId(), $request->request->get('_token'))) {
            $like = new Like();
            $like->setAuthor($this->getUser());
            $forumThread->addLike($like);
            $this->getDoctrine()->getManager()->flush();
        }

        return $this->redirectToRoute('front_forum_thread_show', ['id' => $forumThread->getId()]);
    }

    /**
     * @Route("/{id}/dislikeThread/{idLike}", name="forum_thread_dislike", methods={"POST"})
     */
    public function dislikeThread(Request $request, ForumThread $forumThread, LikeRepository $likeRepository): Response
    {
        if ($this->isCsrfTokenValid('dislike'.$forumThread->getId(), $request->request->get('_token'))) {
            $routeParameters = $request->attributes->get('_route_params');
            $like = $likeRepository->findOneBy([
                "id" => $routeParameters['idLike']
            ]);
            $forumThread->removeLike($like);
            $em = $this->getDoctrine()->getManager();
            $em->remove($like);
            $em->flush();
        }

        return $this->redirectToRoute('front_forum_thread_show', ['id' => $forumThread->getId()]);
    }
}
