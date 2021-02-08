<?php


namespace App\Controller\Front;


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
    public function account(){
        return $this->render("front/account/account.html.twig", [
            "user" => $this->getUser()
        ]);
    }

    /**
     * @Route("/edit", name="_edit", methods={"GET", "POST"})
     */
    public function edit(Request $request, EntityManagerInterface $entityManager, UserPasswordEncoderInterface $passwordEncoder){
        $user = $this->getUser();

        if($this->isGranted("ROLE_COMPANY")){
            $form = $this->createForm(AccountCompanyType::class, $user);
        }else if($this->isGranted("ROLE_USER")){
            $form = $this->createForm(AccountUserType::class, $user);
        }

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()){
            $oldPassword = $form->get('password')->getData();
            $plainPassword = $form->get("plainPassword")->getData();
            $isValidPassword = $passwordEncoder->isPasswordValid($user,$oldPassword);
            $differentPassword = $plainPassword !== $form->get('password')->getData();

            if ($isValidPassword && $differentPassword){
                $user->setPassword(
                    $passwordEncoder->encodePassword(
                        $user,
                        $form->get('plainPassword')->getData()
                    )
                );
                $entityManager->flush();
                return $this->redirectToRoute("front_app_account_show");
            }else{
                if ($differentPassword){
                    $this->addFlash("error","Vous devez entrez un mot de passe différent de celui actuel");
                }

                if ($isValidPassword){
                    $this->addFlash("error","Vous devez entrez un votre mot de passe actuel");
                }
            }
        }

        return $this->render("front/account/edit.html.twig", [
            "user" => $user,
            'form' => $form->createView(),
        ]);
    }
}
