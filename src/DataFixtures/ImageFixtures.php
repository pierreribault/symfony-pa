<?php

namespace App\DataFixtures;

use App\Entity\Activity;
use App\Entity\Image;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\ORM\EntityManager;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;
use Symfony\Component\HttpFoundation\File\File;

class ImageFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager)
    {

        $activities = $manager->getRepository(Activity::class)->findAll();

        foreach ($activities as $activity) {
            $image = new Image();
            $image->setImage('Odwich');
            $image->setImageFile(new File('public/images/activities/odwich.jpg'));
            $image->setActivity($activity);
            $manager->persist($image);
            $manager->flush();
        }
    }

    public function getDependencies(): array
    {
        return [ActivityFixtures::class];
    }
}
