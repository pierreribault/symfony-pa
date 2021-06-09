<?php

namespace App\DataFixtures;

use App\Entity\Activity;
use App\Entity\Category;
use App\Entity\City;
use App\Entity\Company;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\ORM\EntityManager;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class ActivityFixtures extends Fixture  implements DependentFixtureInterface
{
    public function load(ObjectManager $manager)
    {
        $faker = Factory::create();

        $companies = $manager->getRepository(Company::class)->findAll();

        $city = $manager->getRepository(City::class)->findOneBy([]);

        $category = $manager->getRepository(Category::class)->findOneBy([]);

        foreach ($companies as $company) {
            $activity = (new Activity())
                ->setName($faker->company)
                ->setDescription($faker->paragraph)
                ->setPhone($faker->phoneNumber)
                ->setReservationUrl($faker->url)
                ->setLongitude(rand(0, 115200) / 10000 - 4)
                ->setLatitude(rand(423901, 508542) / 10000)
                ->setAddress($faker->address)
                ->setCompany($company)
                ->setCity($manager->getRepository(City::class)->findOneBy(['id' => rand($city->getId(), $city->getId() + 29)]))
                ->addCategory($manager->getRepository(Category::class)->findOneBy(['id' => rand($category->getId(), $category->getId() + 10)]));

            $manager->persist($activity);
        }

        $manager->flush();
    }

    public function getDependencies(): array
    {
        return [CompanyFixtures::class];
    }
}
