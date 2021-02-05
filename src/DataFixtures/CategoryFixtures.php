<?php


namespace App\DataFixtures;


use App\Entity\Category;
use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class CategoryFixtures extends AbstractFixture
{

    public function load(ObjectManager $manager)
    {

        $faker = Factory::create();

        for ($i = 0; $i < 10; $i++) {
            $category = (new Category())->setName($faker->word)->setType($faker->word);
            $manager->persist($category);
            $manager->flush();
        }
    }
}
