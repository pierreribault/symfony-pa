<?php

namespace App\Repository;

use App\Entity\ForumThread;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ForumThread|null find($id, $lockMode = null, $lockVersion = null)
 * @method ForumThread|null findOneBy(array $criteria, array $orderBy = null)
 * @method ForumThread[]    findAll()
 * @method ForumThread[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ForumThreadRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ForumThread::class);
    }

    // /**
    //  * @return ForumThread[] Returns an array of ForumThread objects
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
    public function findOneBySomeField($value): ?ForumThread
    {
        return $this->createQueryBuilder('f')
            ->andWhere('f.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */

    public function findByTitle($text) {
        return $this->createQueryBuilder('f')
            ->where('f.title LIKE :title')
            ->setParameter('title', '%'.$text.'%')
            ->orderBy('f.createdAt', 'DESC')
            ->getQuery()
            ->getResult();
    }
}
