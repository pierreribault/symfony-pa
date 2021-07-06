<?php

namespace App\Repository;

use App\Entity\LikeAnswer;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method LikeAnswer|null find($id, $lockMode = null, $lockVersion = null)
 * @method LikeAnswer|null findOneBy(array $criteria, array $orderBy = null)
 * @method LikeAnswer[]    findAll()
 * @method LikeAnswer[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class LikeAnswerRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, LikeAnswer::class);
    }

    // /**
    //  * @return LikeAnswer[] Returns an array of LikeAnswer objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('l')
            ->andWhere('l.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('l.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?LikeAnswer
    {
        return $this->createQueryBuilder('l')
            ->andWhere('l.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
