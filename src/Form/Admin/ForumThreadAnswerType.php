<?php

namespace App\Form\Admin;

use App\Entity\ForumThread;
use App\Entity\ForumThreadAnswer;
use App\Form\ForumThreadType;
use FOS\CKEditorBundle\Form\Type\CKEditorType;
use App\Entity\User;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ForumThreadAnswerType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('content', CKEditorType::class, [
                "label" => "Contenu"
            ])
            ->add('author', EntityType::class, [
                "class" => User::class
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => ForumThreadAnswer::class,
        ]);
    }
}
