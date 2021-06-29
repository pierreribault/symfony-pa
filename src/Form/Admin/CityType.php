<?php

namespace App\Form\Admin;

use App\Entity\City;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CityType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', TextType::class,[
                "label" => "Nom"
            ])
            ->add('region', TextType::class,[
                "label" => "Région"
            ])
            ->add('country', TextType::class,[
                "label" => "Country"
            ])
            ->add('regionCode', TextType::class,[
                "label" => "Region Code"
            ])
            ->add('cityCode', TextType::class,[
                "label" => "Code Ville"
            ])
            ->add('longitude', TextType::class,[
                "label" => "Longitude"
            ])
            ->add('latitude', TextType::class,[
                "label" => "Latitude"
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => City::class,
        ]);
    }
}
