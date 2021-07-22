<?php


namespace App\Form;


use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\Extension\Core\Type\TelType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\IsTrue;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;

class AccountUserType extends AbstractType
{

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        return  $builder
            ->add('email')
            ->add('plainPassword', RepeatedType::class, [
                'type' => PasswordType::class,
                'required' => false,
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
                        'allowNull' => true,
                    ]),
                    new Length([
                        'min' => 6,
                        'minMessage' => 'Your password should be at least {{ limit }} characters',
                        // max length allowed by Symfony for security reasons
                        'max' => 4096,
                    ]),
                ],
            ])
            ->add('address', TextType::class, [
                "required" => false
            ])
            ->add('phone', TelType::class, [
                "required" => false
            ])
            ->add('person', PersonType::class)
            ;

    }

    public function configureOptions(OptionsResolver $resolver)
    {
        return [
            "data_class" => User::class,
        ];
    }
}
