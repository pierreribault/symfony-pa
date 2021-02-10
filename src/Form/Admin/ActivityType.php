<?php

namespace App\Form\Admin;

use App\Entity\Activity;
use App\Entity\Category;
use App\Entity\City;
use App\Entity\Company;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ActivityType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name')
            ->add('description')
            ->add('reservationUrl')
            ->add('address')
            ->add('phone')
            ->add('menu')
            ->add('city', EntityType::class, [
                "class" => City::class,
                "choice_label" => 'name'
            ])
            ->add('company', EntityType::class, [
                "class" => Company::class,
                "choice_label" => 'name'
            ])
            ->add('categories', EntityType::class, [
                "class" => Category::class,
                "choice_label" => 'name',
                'multiple' => true,
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
