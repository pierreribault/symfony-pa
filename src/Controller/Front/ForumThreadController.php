<?php

namespace App\Controller\Front;

use App\Entity\ForumThread;
use App\Form\ForumThreadType;
use App\Repository\ForumThreadRepository;
use App\Repository\ForumThreadAnswerRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

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
     * @Route("/{id}", name="forum_thread_show", methods={"GET"})
     */
    public function show(ForumThread $forumThread, ForumThreadAnswerRepository $forumThreadAnswerRepository): Response
    {
        return $this->render('front/forum_thread/show.html.twig', [
            'forum_thread' => $forumThread,
            'forum_thread_answers' => $forumThreadAnswerRepository->findBy([
                "forumThread" => $forumThread
            ])
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
}
