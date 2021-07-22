<?php

namespace App\Form\Front;

use App\Entity\Activity;
use App\Entity\Category;
use App\Entity\City;
use App\Form\ImageType;
use FOS\CKEditorBundle\Form\Type\CKEditorType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\TelType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ActivityType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', TextType::class, [
                "label" => "Name"
            ])
            ->add('description', CKEditorType::class, [
                "label" => "Description"
            ])
            ->add('reservationUrl', TextType::class, [
                "label" => "Reservation url"
            ])
            ->add('address', TextType::class, [
                "label" => "Address"
            ])
            ->add('longitude', NumberType::class, [
                "label" => "Longitude"
            ])
            ->add('latitude', NumberType::class, [
                "label" => "Latitude"
            ])
            ->add('phone', TelType::class, [
                "label" => "Phone"
            ])
            ->add('menu', CKEditorType::class, [
                "label" => "Menu"
            ])
            ->add('images', CollectionType::class, [
                "entry_type" => ImageType::class,
                "allow_add" => true,
                "allow_delete" => true,
                "by_reference" => false
            ])
            ->add('city', EntityType::class, [
                "label" => "City",
                "class" => City::class,
                "choice_label" => 'name'
            ])
            ->add('categories', EntityType::class, [
                "multiple" => true,
                "class" => Category::class,
                "choice_label" => 'name',
                "label" => "Categories"
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
