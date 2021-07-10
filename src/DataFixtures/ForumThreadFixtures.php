<?php


namespace App\DataFixtures;


use App\Entity\ForumThread;
use App\Entity\ForumThreadAnswer;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class ForumThreadFixtures extends Fixture
{

    public function load(ObjectManager $manager)
    {
        $user = array_filter($manager->getRepository(User::class)->findAll(), function ($user) {
            return in_array("ROLE_USER", $user->getRoles());
        });

        $faker = Factory::create();

        for ($i = 0; $i < 15; $i++) {
            $forum = (new ForumThread())
            ->setAuthor($user[rand(0, count($user) - 1)])
                ->setDescription($faker->text)
                ->setTitle($faker->sentence)
            ;

            for ($j=0;$j < rand(2,6); $j++){
                $answer = (new ForumThreadAnswer())
                    ->setAuthor($user[rand(0, count($user) - 1)])
                    ->setContent($faker->text);

                $forum->addForumThreadAnswer($answer);
            }

            $manager->persist($forum);
        }

        $manager->flush();
    }

}
