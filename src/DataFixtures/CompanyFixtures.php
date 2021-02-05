<?php


namespace App\DataFixtures;


use App\Entity\Company;
use App\Entity\User;
use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class CompanyFixtures extends AbstractFixture implements DependentFixtureInterface
{

    public function load(ObjectManager $manager)
    {
        $faker = Factory::create();

        /** @var User $userCompany */
        $userCompany = $manager->getRepository(Company::class)->findOneBy(["roles" => ["ROLE_COMPANY"]]);

        $company = (new Company())->setName($faker->word)->setAccount($userCompany)->setSiret($faker->word)->setSiteUrl($faker->url)->setDescription($faker->sentence);

        $manager->persist($company);
        $manager->flush();
    }

    public function getDependencies()
    {
        return [UserFixtures::class];
    }
}
