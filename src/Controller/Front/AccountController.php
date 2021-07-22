<?php


namespace App\Controller\Front;


use App\Entity\User;
use App\Form\AccountCompanyType;
use App\Form\AccountUserType;
use Doctrine\ORM\EntityManagerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

/**
 * @IsGranted("IS_AUTHENTICATED_FULLY")
 * @Route("/account", name="app_account")
 * Class AccountController
 * @package App\Controller\Front
 */
class AccountController extends AbstractController
{

    /**
     * @Route("/", name="_show", methods={"GET"})
     */
    public function account()
    {
        return $this->render("front/account/account.html.twig", [
            "user" => $this->getUser()
        ]);
    }

    /**
     * @Route("/delete", name="_delete", methods={"POST", "DELETE"})
     */
    public function delete()
    {
        /** @var User $user */
        $user= $this->getUser();
        $user->setEnabled(false);
        $this->getDoctrine()->getManager()->flush();

        return $this->redirectToRoute("app_logout");
    }

    /**
     * @Route("/edit", name="_edit", methods={"GET", "POST"})
     */
    public function edit(Request $request, EntityManagerInterface $entityManager, UserPasswordEncoderInterface $passwordEncoder)
    {
        $user = $this->getUser();

        if ($this->isGranted("ROLE_COMPANY")) {
            $form = $this->createForm(AccountCompanyType::class, $user);
        } else {
            if ($this->isGranted("ROLE_USER")) {
                $form = $this->createForm(AccountUserType::class, $user);
            }
        }

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $plainPassword = $form->get("plainPassword")->getData();

            if (!is_null($plainPassword)) {
                $user->setPassword(
                    $passwordEncoder->encodePassword(
                        $user,
                        $plainPassword
                    )
                );
            }

            $entityManager->flush();
            return $this->redirectToRoute("front_app_account_show");
        }

        return $this->render("front/account/edit.html.twig", [
            "user" => $user,
            'form' => $form->createView(),
            "errors" => $form->getErrors()
        ]);
    }
}
