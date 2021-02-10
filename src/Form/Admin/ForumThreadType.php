<?php

namespace App\Form\Admin;

use App\Entity\Company;
use App\Entity\ForumThread;
use App\Entity\RoadTrip;
use App\Entity\User;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ForumThreadType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('title')
            ->add('description')
            ->add('createdAt')
            ->add('updatedAt')
            ->add('author', EntityType::class, [
                "class" => User::class
            ])
            ->add('roadTrip', EntityType::class, [
                "class" => RoadTrip::class
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => ForumThread::class,
        ]);
    }
}
