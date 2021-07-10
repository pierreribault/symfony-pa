<?php

namespace App\Form\Admin;

use App\Entity\Activity;
use App\Entity\RoadTrip;
use App\Entity\User;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class RoadTripType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('departure', TextType::class, [
                "label" => "Départ"
            ])
            ->add('arrival', TextType::class, [
                "label" => "Arrivé"
            ])
            ->add('author', EntityType::class, [
                "class" => User::class
            ])
            ->add("activities", EntityType::class, [
                "multiple" => true,
                "class" => Activity::class,
                "label" => "Activités",
                "choice_label" => "name"
            ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => RoadTrip::class,
        ]);
    }
}
