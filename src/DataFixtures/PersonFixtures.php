<?php


namespace App\DataFixtures;


use App\Entity\Activity;
use App\Entity\Image;
use App\Entity\Person;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\HttpFoundation\File\File;

class PersonFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager)
    {

        $users = $manager->getRepository(User::class)->findAll();

        foreach ($users as $user) {
            $person = (new Person())->setAccount($user);
            $manager->persist($person);
            $manager->flush();
        }
    }

    public function getDependencies(): array
    {
        return [UserFixtures::class];
    }
}
