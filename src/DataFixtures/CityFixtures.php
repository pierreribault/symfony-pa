<?php


namespace App\DataFixtures;


use App\Entity\City;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class CityFixtures extends Fixture
{

    public function load(ObjectManager $manager)
    {
        $faker = Factory::create();

        for ($i = 0; $i < 30; $i++) {
            $city = (new City())
                ->setName($faker->city)
                ->setCityCode(0)
                ->setCountry("France")
                ->setLatitude(0)
                ->setLongitude(0)
                ->setRegion($faker->country)
                ->setRegionCode(0)
            ;
            $manager->persist($city);
        }

        $manager->flush();
    }
}
