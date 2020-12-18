<?php

namespace App\Repository;

use App\Entity\ForumThreadAnswer;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ForumThreadAnswer|null find($id, $lockMode = null, $lockVersion = null)
 * @method ForumThreadAnswer|null findOneBy(array $criteria, array $orderBy = null)
 * @method ForumThreadAnswer[]    findAll()
 * @method ForumThreadAnswer[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ForumThreadAnswerRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ForumThreadAnswer::class);
    }

    // /**
    //  * @return ForumThreadAnswer[] Returns an array of ForumThreadAnswer objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('f')
            ->andWhere('f.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('f.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?ForumThreadAnswer
    {
        return $this->createQueryBuilder('f')
            ->andWhere('f.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
