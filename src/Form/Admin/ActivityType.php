<?php

namespace App\Form\Admin;

use App\Entity\Activity;
use App\Entity\Category;
use App\Entity\City;
use App\Entity\Company;
use FOS\CKEditorBundle\Form\Type\CKEditorType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\TelType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ActivityType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', TextType::class,[
                "label" => "Nom"
            ])
            ->add('description', CKEditorType::class,[
                "label" => "Description"
            ])
            ->add('reservationUrl', TextType::class,[
                "label" => "Url Reservation"
            ])
            ->add('address', TextType::class,[
                "label" => "Adresse"
            ])
            ->add('phone', TelType::class,[
                "label" => "Téléphone"
            ])
            ->add('menu', TextType::class,[
                "label" => "Menu"
            ])
            ->add('city', EntityType::class, [
                "class" => City::class,
                "choice_label" => "name",
                "label" => "Ville"
            ])
            ->add('company', EntityType::class, [
                "class" => Company::class,
                "choice_label" => "name",
                "label" => "Entreprise"
            ])
            ->add('categories', EntityType::class, [
                "class" => Category::class,
                "multiple" => true,
                "label" => "Catégories"
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Activity::class,
        ]);
    }
}
