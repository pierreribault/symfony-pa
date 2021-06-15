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
            ['name' => 'Hotel', 'url' => '/images/icons/maps/hotel.png'],
            ['name' => 'Bar', 'url' => '/images/icons/maps/bar.png'],
            ['name' => 'Fastfood', 'url' => '/images/icons/maps/fastfood.png'],
            ['name' => 'Musée archologique', 'url' => '/images/icons/maps/museum_archeological.png'],
            ['name' => 'Musée de l\'art', 'url' => '/images/icons/maps/museum_art.png'],
            ['name' => 'Musée de l\'artisanat', 'url' => '/images/icons/maps/museum_craft.png'],
            ['name' => 'Musée de l\'industrie', 'url' => '/images/icons/maps/museum_industry.png'],
            ['name' => 'Musée naval', 'url' => '/images/icons/maps/museum_naval.png'],
            ['name' => 'Musée en plein air', 'url' => '/images/icons/maps/museum_openair.png'],
            ['name' => 'Musée des sciences', 'url' => '/images/icons/maps/museum_science.png'],
            ['name' => 'Musée de guerre', 'url' => '/images/icons/maps/museum_war.png'],
        ];

        foreach ($categories as $data) {
            $category = new Category();
            $category->setName($data['name']);
            $category->setUrl($data['url']);
            $manager->persist($category);
            $manager->flush();
        }
    }
}
