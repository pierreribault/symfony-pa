<?php

namespace App\Repository;

use App\Entity\RoadTripUser;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method RoadTripUser|null find($id, $lockMode = null, $lockVersion = null)
 * @method RoadTripUser|null findOneBy(array $criteria, array $orderBy = null)
 * @method RoadTripUser[]    findAll()
 * @method RoadTripUser[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RoadTripUserRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, RoadTripUser::class);
    }

    // /**
    //  * @return RoadTripUser[] Returns an array of RoadTripUser objects
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
