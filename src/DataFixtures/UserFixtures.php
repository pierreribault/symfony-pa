<?php


namespace App\DataFixtures;


use App\Entity\User;
use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class UserFixtures extends AbstractFixture
{

    public function load(ObjectManager $manager)
    {
        $faker = Factory::create();

        $user = (new User())
            ->setEmail($faker->email)
            ->setAddress($faker->address)
            ->setEnabled(true)
            ->setIsVerified(true)
            ->setPassword("root")
            ->setPhone($faker->phoneNumber)
        ;
        $company = (new User())
            ->setEmail($faker->email)
            ->setAddress($faker->address)
            ->setEnabled(true)
            ->setIsVerified(true)
            ->setPassword("root")
            ->setPhone($faker->phoneNumber)
            ->setRoles(["ROLE_COMPANY"])
        ;

        $admin = (new User())
            ->setEmail($faker->email)
            ->setAddress($faker->address)
            ->setEnabled(true)
            ->setIsVerified(true)
            ->setPassword("root")
            ->setPhone($faker->phoneNumber)
            ->setRoles(["ROLE_ADMIN"]);

       $manager->persist($user);
       $manager->persist($company);
       $manager->persist($admin);

        $manager->flush();
    }
}
