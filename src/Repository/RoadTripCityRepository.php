<?php

namespace App\Repository;

use App\Entity\RoadTripCity;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method RoadTripCity|null find($id, $lockMode = null, $lockVersion = null)
 * @method RoadTripCity|null findOneBy(array $criteria, array $orderBy = null)
 * @method RoadTripCity[]    findAll()
 * @method RoadTripCity[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RoadTripCityRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, RoadTripCity::class);
    }

    // /**
    //  * @return RoadTripCity[] Returns an array of RoadTripCity objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('r.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?RoadTripCity
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
