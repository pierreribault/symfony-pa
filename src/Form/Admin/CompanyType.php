<?php

namespace App\Form\Admin;

use App\Entity\Company;
use App\Entity\User;
use FOS\CKEditorBundle\Form\Type\CKEditorType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CompanyType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', TextType::class, [
                "label" => "Nom"
            ])
            ->add('siret', TextType::class, [
                "label" => "Siret"
            ])
            ->add('description', CKEditorType::class, [
                "label" => "Description"
            ])
            ->add('siteUrl', TextType::class, [
                "label" => "Url"
            ])
            ->add('account', EntityType::class, [
                "class" => User::class,
                "choice_label" => "email",
                "label" => "Utilisateur"
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Company::class,
        ]);
    }
}
