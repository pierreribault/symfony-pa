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

        for ($i = 0; $i < 30; $i++) {
            $company = (new User())
                ->setEmail(sprintf("company%s@example.com", $i))
                ->setAddress($faker->address)
                ->setEnabled(true)
                ->setIsVerified(true)
                ->setPhone($faker->phoneNumber)
                ->setRoles(["ROLE_COMPANY"]);

            $company->setPassword($this->encoder->encodePassword($company, 'root'));

            $manager->persist($company);
        }

        $admin = (new User())
            ->setEmail("admin@admin.com")
            ->setAddress($faker->address)
            ->setEnabled(true)
            ->setIsVerified(true)
            ->setPhone($faker->phoneNumber)
            ->setRoles(["ROLE_ADMIN"]);

        $userPwd = $this->encoder->encodePassword($user, 'root');
        $adminPwd = $this->encoder->encodePassword($admin, 'root');

        $user->setPassword($userPwd);
        $admin->setPassword($adminPwd);

        $manager->persist($user);
        $manager->persist($admin);

        $manager->flush();
    }
}
