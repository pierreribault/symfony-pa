<?php

namespace App\Controller\Front;

use App\Entity\ForumThreadAnswer;
use App\Entity\LikeAnswer;
use App\Form\ForumThreadAnswerType;
use App\Repository\ForumThreadAnswerRepository;
use App\Repository\ForumThreadRepository;
use App\Repository\LikeAnswerRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/forum/thread/{idThread}/answer")
 */
class ForumThreadAnswerController extends AbstractController
{
    /**
     * @Route("/", name="forum_thread_answer_index", methods={"GET"})
     */
    public function index(ForumThreadAnswerRepository $forumThreadAnswerRepository): Response
    {
        return $this->render('front/forum_thread_answer/index.html.twig', [
            'forum_thread_answers' => $forumThreadAnswerRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="forum_thread_answer_new", methods={"GET","POST"})
     */
    public function new(Request $request, ForumThreadRepository $forumThreadRepository, $idThread): Response
    {
        $forumThreadAnswer = new ForumThreadAnswer();
        $form = $this->createForm(ForumThreadAnswerType::class, $forumThreadAnswer);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $forumThreadAnswer->setAuthor($this->getUser());
            $forumThreadAnswer->setForumThread($forumThreadRepository->findOneBy([
                "id" => $idThread
            ]));
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($forumThreadAnswer);
            $entityManager->flush();

            return $this->redirectToRoute('front_forum_thread_show', ['id' => $idThread]);
        }

        return $this->render('front/forum_thread_answer/new.html.twig', [
            'forum_thread_answer' => $forumThreadAnswer,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="forum_thread_answer_show", methods={"GET"})
     */
    public function show(ForumThreadAnswer $forumThreadAnswer): Response
    {
        return $this->render('front/forum_thread_answer/show.html.twig', [
            'forum_thread_answer' => $forumThreadAnswer,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="forum_thread_answer_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, ForumThreadAnswer $forumThreadAnswer, $idThread): Response
    {
        $this->denyAccessUnlessGranted("answer_edit", $forumThreadAnswer);

        $form = $this->createForm(ForumThreadAnswerType::class, $forumThreadAnswer);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('front_forum_thread_show', ['id' => $idThread]);
        }

        return $this->render('front/forum_thread_answer/edit.html.twig', [
            'forum_thread_answer' => $forumThreadAnswer,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="forum_thread_answer_delete", methods={"DELETE"})
     */
    public function delete(Request $request, ForumThreadAnswer $forumThreadAnswer, $idThread): Response
    {
        $this->denyAccessUnlessGranted("answer_delete", $forumThreadAnswer);

        if ($this->isCsrfTokenValid('delete'.$forumThreadAnswer->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($forumThreadAnswer);
            $entityManager->flush();
        }

        return $this->redirectToRoute('front_forum_thread_show', ['id' => $idThread]);
    }

    /**
     * @Route("/{id}/likeAnswer", name="forum_thread_answer_like", methods={"POST"})
     */
    public function likeAnswer(Request $request, ForumThreadAnswer $forumThreadAnswer, $idThread): Response
    {
        if ($this->isCsrfTokenValid('like'.$forumThreadAnswer->getId(), $request->request->get('_token'))) {
            $like = new LikeAnswer();
            $like->setAuthor($this->getUser());
            $forumThreadAnswer->addLikeAnswer($like);
            $this->getDoctrine()->getManager()->flush();
        }

        return $this->redirectToRoute('front_forum_thread_show', ['id' => $idThread]);
    }

    /**
     * @Route("/{id}/dislikeAnswer/{idLike}", name="forum_thread_answer_dislike", methods={"POST"})
     */
    public function dislikeAnswer(Request $request, ForumThreadAnswer $forumThreadAnswer, LikeAnswerRepository $likeAnswerRepository, $idThread): Response
    {
        if ($this->isCsrfTokenValid('dislike'.$forumThreadAnswer->getId(), $request->request->get('_token'))) {
            $routeParameters = $request->attributes->get('_route_params');
            $like = $likeAnswerRepository->findOneBy([
                "id" => $routeParameters['idLike']
            ]);
            $forumThreadAnswer->removeLikeAnswer($like);
            $em = $this->getDoctrine()->getManager();
            $em->remove($like);
            $em->flush();
        }

        return $this->redirectToRoute('front_forum_thread_show', ['id' => $idThread]);
    }
}
