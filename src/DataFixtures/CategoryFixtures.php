<?php


namespace App\DataFixtures;

use App\Entity\Category;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class CategoryFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $categories = [
            ['name' => 'hotel', 'type' => 'hotel', 'url' => '/images/icons/maps/hotel.png'],
            ['name' => 'bar', 'type' => 'bar', 'url' => '/images/icons/maps/bar.png'],
            ['name' => 'museum', 'type' => 'museum', 'url' => '/images/icons/maps/museum_science.png']
        ];

        foreach ($categories as $data) {
            $category = new Category();
            $category->setName($data['name']);
            $category->setType($data['type']);
            $category->setUrl($data['url']);
            $manager->persist($category);
            $manager->flush();
        }
    }
}
