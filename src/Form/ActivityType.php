<?php

namespace App\Form;

use App\Entity\Activity;
use App\Entity\Category;
use App\Entity\City;
use FOS\CKEditorBundle\Form\Type\CKEditorType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\TelType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ActivityType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', TextType::class)
            ->add('description', CKEditorType::class)
            ->add('reservationUrl', TextType::class)
            ->add('address', TextType::class)
            ->add('phone', TelType::class)
            ->add('menu', CKEditorType::class)
            ->add('images', CollectionType::class, [
                "entry_type" => ImageType::class,
                "allow_add" => true,
                "allow_delete" => true,
            ])
            ->add('city', EntityType::class, [
                "class" => City::class,
                "choice_label" => 'name'
            ])
            ->add('categories', EntityType::class, [
                "multiple" => true,
                "class" => Category::class,
                "choice_label" => 'name'
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
