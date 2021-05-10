<?php

namespace App\Controller\Admin;

use App\Entity\ForumThread;
use App\Form\Admin\ForumThreadType;
use App\Repository\ForumThreadRepository;
use App\Service\Pagination;
use FOS\RestBundle\Controller\Annotations as Rest;
use FOS\RestBundle\Request\ParamFetcherInterface;
use Knp\Component\Pager\PaginatorInterface;
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
     * @Rest\QueryParam(name="sort", default="id", requirements="id")
     * @Rest\QueryParam(name="direction", default="asc", requirements="asc|desc")
     * @Rest\QueryParam(name="page", default=1, requirements="\d+")
     * @Rest\QueryParam(name="limit", default=Pagination::DEFAULT_LIMIT, requirements="\d+")
     * @Route("/", name="forum_thread_index", methods={"GET"})
     */
    public function index(ForumThreadRepository $forumThreadRepository, ParamFetcherInterface $paramFetcher, PaginatorInterface $paginator): Response
    {
        $pagination = Pagination::paginate($forumThreadRepository->createQueryBuilder("c"), $paginator, $paramFetcher);

        return $this->render('admin/forum_thread/index.html.twig', [
            'forum_threads' => $pagination->getItems(),
            'pagination' => $pagination,
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
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($forumThread);
            $entityManager->flush();

            return $this->redirectToRoute('admin_forum_thread_index');
        }

        return $this->render('admin/forum_thread/new.html.twig', [
            'forum_thread' => $forumThread,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="forum_thread_show", methods={"GET"})
     */
    public function show(ForumThread $forumThread): Response
    {
        return $this->render('admin/forum_thread/show.html.twig', [
            'forum_thread' => $forumThread,
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

            return $this->redirectToRoute('admin_forum_thread_index');
        }

        return $this->render('admin_forum_thread/edit.html.twig', [
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

        return $this->redirectToRoute('admin_forum_thread_index');
    }
}
