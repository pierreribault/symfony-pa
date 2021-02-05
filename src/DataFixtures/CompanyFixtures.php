<?php


namespace App\DataFixtures;


use App\Entity\Company;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class CompanyFixtures extends Fixture implements DependentFixtureInterface
{

    public function load(ObjectManager $manager)
    {
        $faker = Factory::create();

        /** @var User $userCompany */
        $userCompany = $manager->getRepository(User::class)->findOneBy(["email" => "company@example.com"]);

        $company = (new Company())->setName($faker->word)->setAccount($userCompany)->setSiret($faker->word)->setSiteUrl($faker->url)->setDescription($faker->sentence);

        $manager->persist($company);
        $manager->flush();
    }

    public function getDependencies(): array
    {
        return [UserFixtures::class];
    }
}
