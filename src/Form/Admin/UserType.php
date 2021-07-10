<?php

namespace App\Form\Admin;

use App\Entity\Company;
use App\Entity\Person;
use App\Entity\User;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\CallbackTransformer;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\Extension\Core\Type\TelType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;

class UserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('email', TextType::class, [
                "label" => "Email"
            ])
            ->add('roles', ChoiceType::class, [
                "label" => "Roles",
                "expanded" => false,
                "multiple" => false,
                "choices" => [
                    "Entreprise" => "ROLE_COMPANY",
                    "Particulier" => "ROLE_USER",
                    "Administrateur" => "ROLE_ADMIN",
                ]
            ]) ->add('plainPassword', RepeatedType::class, [
                'type' => PasswordType::class,
                // instead of being set onto the object directly,
                // this is read and encoded in the controller
                "first_options" => [
                    "attr" => [
                        "placeholder" => "Mot de passe",
                        "class" => "form-control"
                    ],
                    "label" => "Mot de passe"
                ],
                "second_options" => [
                    "attr" => [
                        "placeholder" => "Confirmation",
                        "class" => "form-control"
                    ],
                    "label" => "Confirmation"
                ],
                'mapped' => false,
                'constraints' => [
                    new NotBlank([
                        'message' => 'Please enter a password',
                    ]),
                    new Length([
                        'min' => 6,
                        'minMessage' => 'Your password should be at least {{ limit }} characters',
                        // max length allowed by Symfony for security reasons
                        'max' => 4096,
                    ]),
                ],
            ])
            ->add('isVerified', CheckboxType::class, [
                "label" => "Verified"
            ])
            ->add('address', TextType::class, [
                "label" => "Address"
            ])
            ->add('phone', TelType::class, [
                "label" => "Phone"
            ])
            ->add('enabled', CheckboxType::class, [
                "label" => "Enabled"
            ])
            ->add('person', EntityType::class, [
                "class" => Person::class,
                "choice_label" => "name",
                "label" => "Person"
            ])
            ->add('company', EntityType::class, [
                "class" => Company::class,
                "choice_label" => "name",
                "label" => "Company"
            ])
        ;


        $builder->get('roles')
            ->addModelTransformer(new CallbackTransformer(
                function ($tagsAsArray) {
                    // transform the array to a string
                    return $tagsAsArray[0];
                },
                function ($tagsAsString) {
                    // transform the string back to an array
                    return [$tagsAsString];
                }
            ))
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
