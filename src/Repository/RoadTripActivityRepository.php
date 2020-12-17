<?php

namespace App\Repository;

use App\Entity\RoadTripActivity;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method RoadTripActivity|null find($id, $lockMode = null, $lockVersion = null)
 * @method RoadTripActivity|null findOneBy(array $criteria, array $orderBy = null)
 * @method RoadTripActivity[]    findAll()
 * @method RoadTripActivity[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RoadTripActivityRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, RoadTripActivity::class);
    }

    // /**
    //  * @return RoadTripActivity[] Returns an array of RoadTripActivity objects
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
    public function findOneBySomeField($value): ?RoadTripActivity
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
