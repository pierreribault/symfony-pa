<?php


namespace App\DataFixtures;


use App\Entity\Activity;
use App\Entity\RoadTrip;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class RoadTripFixtures extends Fixture
{

    public function load(ObjectManager $manager)
    {
        $users = $manager->getRepository(User::class)->findAll();

        for ($i=0; $i < 15; $i++){
            $roadTrip = (new RoadTrip())->setAuthor($users[rand(0,count($users)-1)])
                ->setArrival("Paris")
                ->setDeparture("Lyon")
                ->setUlid()
            ;

            $manager->persist($roadTrip);
        }

        $manager->flush();
    }


    public function getDependencies(): array
    {
        return [ActivityFixtures::class, UserFixtures::class];
    }
}
