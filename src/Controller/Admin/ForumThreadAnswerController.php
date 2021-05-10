<?php

namespace App\Controller\Admin;

use App\Entity\ForumThreadAnswer;
use App\Form\Admin\ForumThreadAnswerType;
use App\Repository\ForumThreadAnswerRepository;
use App\Service\Pagination;
use FOS\RestBundle\Controller\Annotations as Rest;
use FOS\RestBundle\Request\ParamFetcherInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/forum/thread/answer")
 */
class ForumThreadAnswerController extends AbstractController
{
    /**
     * @Rest\QueryParam(name="sort", default="id", requirements="id")
     * @Rest\QueryParam(name="direction", default="asc", requirements="asc|desc")
     * @Rest\QueryParam(name="page", default=1, requirements="\d+")
     * @Rest\QueryParam(name="limit", default=Pagination::DEFAULT_LIMIT, requirements="\d+")
     * @Route("/", name="forum_thread_answer_index", methods={"GET"})
     */
    public function index(ForumThreadAnswerRepository $forumThreadAnswerRepository, ParamFetcherInterface $paramFetcher, PaginatorInterface $paginator): Response
    {
        $pagination = Pagination::paginate($forumThreadAnswerRepository->createQueryBuilder("c"), $paginator, $paramFetcher);
        return $this->render('admin/forum_thread_answer/index.html.twig', [
            'forum_thread_answers' => $pagination->getItems(),
            'pagination' => $pagination,
        ]);
    }

    /**
     * @Route("/new", name="forum_thread_answer_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $forumThreadAnswer = new ForumThreadAnswer();
        $form = $this->createForm(ForumThreadAnswerType::class, $forumThreadAnswer);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($forumThreadAnswer);
            $entityManager->flush();

            return $this->redirectToRoute('admin_forum_thread_answer_index');
        }

        return $this->render('admin/forum_thread_answer/new.html.twig', [
            'forum_thread_answer' => $forumThreadAnswer,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="forum_thread_answer_show", methods={"GET"})
     */
    public function show(ForumThreadAnswer $forumThreadAnswer): Response
    {
        return $this->render('admin/forum_thread_answer/show.html.twig', [
            'forum_thread_answer' => $forumThreadAnswer,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="forum_thread_answer_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, ForumThreadAnswer $forumThreadAnswer): Response
    {
        $form = $this->createForm(ForumThreadAnswerType::class, $forumThreadAnswer);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('admin_forum_thread_answer_index');
        }

        return $this->render('admin/forum_thread_answer/edit.html.twig', [
            'forum_thread_answer' => $forumThreadAnswer,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="forum_thread_answer_delete", methods={"DELETE"})
     */
    public function delete(Request $request, ForumThreadAnswer $forumThreadAnswer): Response
    {
        if ($this->isCsrfTokenValid('delete'.$forumThreadAnswer->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($forumThreadAnswer);
            $entityManager->flush();
        }

        return $this->redirectToRoute('admin_forum_thread_answer_index');
    }
}
