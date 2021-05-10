<?php

namespace App\Form\Admin;

use App\Entity\ForumThread;
use App\Entity\RoadTrip;
use App\Entity\User;
use FOS\CKEditorBundle\Form\Type\CKEditorType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ForumThreadType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('title', TextType::class)
            ->add('description', CKEditorType::class)
            ->add('author', EntityType::class, [
                "class" => User::class,
                "choice_label" => "email"
            ])
            ->add('roadTrip', EntityType::class, [
                "class" => RoadTrip::class,
                "choice_label" => "id"
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
