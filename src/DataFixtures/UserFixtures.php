<?php


namespace App\DataFixtures;


use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserFixtures extends Fixture
{
    private $encoder;

    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $this->encoder = $encoder;
    }

    public function load(ObjectManager $manager)
    {
        $faker = Factory::create();

        $user = (new User())
            ->setEmail($faker->email)
            ->setAddress($faker->address)
            ->setEnabled(true)
            ->setIsVerified(true)
            ->setPhone($faker->phoneNumber);

        $company = (new User())
            ->setEmail("company@example.com")
            ->setAddress($faker->address)
            ->setEnabled(true)
            ->setIsVerified(true)
            ->setPhone($faker->phoneNumber)
            ->setRoles(["ROLE_COMPANY"]);

        $admin = (new User())
            ->setEmail($faker->email)
            ->setAddress($faker->address)
            ->setEnabled(true)
            ->setIsVerified(true)
            ->setPhone($faker->phoneNumber)
            ->setRoles(["ROLE_ADMIN"]);

        $userPwd = $this->encoder->encodePassword($user, 'root');
        $compPwd = $this->encoder->encodePassword($company, 'root');
        $adminPwd = $this->encoder->encodePassword($admin, 'root');

        $user->setPassword($userPwd);
        $company->setPassword($compPwd);
        $admin->setPassword($adminPwd);

        $manager->persist($user);
        $manager->persist($company);
        $manager->persist($admin);

        $manager->flush();
    }
}
