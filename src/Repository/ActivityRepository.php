<?php

namespace App\Repository;

use App\Entity\Activity;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Activity|null find($id, $lockMode = null, $lockVersion = null)
 * @method Activity|null findOneBy(array $criteria, array $orderBy = null)
 * @method Activity[]    findAll()
 * @method Activity[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ActivityRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Activity::class);
    }

    public function findWithFilters($category, $city, $fromLongitude, $fromLatitude, $toLongitude, $toLatitude)
    {
        $query = $this->createQueryBuilder('a')
            ->join('a.categories', 'c')
            ->andWhere('a.latitude >= :fromLatitude')
            ->andWhere('a.latitude <= :toLatitude')
            ->andWhere('a.longitude >= :fromLongitude')
            ->andWhere('a.longitude <= :toLongitude')
            ->setParameter(':fromLatitude', $fromLatitude)
            ->setParameter(':toLatitude', $toLatitude)
            ->setParameter(':fromLongitude', $fromLongitude)
            ->setParameter(':toLongitude', $toLongitude);

        if ($category) {
            $query->andWhere('c.id = :category')
                ->setParameter(':category', $category);
        }

        if ($city) {
            $query->andWhere('a.city = :city')
                ->setParameter(':city', $city);
        }

        return $query->getQuery()->getResult();
    }

}
