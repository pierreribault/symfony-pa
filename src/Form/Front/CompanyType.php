<?php

namespace App\Form\Front;

use App\Entity\Company;
use FOS\CKEditorBundle\Form\Type\CKEditorType;
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
                "label" => "Name"
            ])
            ->add('siret', TextType::class, [
                "label" => "Siret"
            ])
            ->add('description', CKEditorType::class, [
                "label" => "Description"
            ])
            ->add('siteUrl', TextType::class, [
                "label" => "Site url"
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
