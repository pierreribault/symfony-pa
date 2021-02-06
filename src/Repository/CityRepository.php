<?php

namespace App\Repository;

use App\Entity\City;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method City|null find($id, $lockMode = null, $lockVersion = null)
 * @method City|null findOneBy(array $criteria, array $orderBy = null)
 * @method City[]    findAll()
 * @method City[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CityRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, City::class);
    }

    /**
     * Search cities by Query Search Parameter.
     * @param string $querySearch
     * @return int|mixed|string
     */
    public function findCitiesByQuerySearch(string $querySearch)
    {
        $querySearch = strtolower($querySearch);

        $query = $this->createQueryBuilder('c')
            ->where('lower(c.name) LIKE :querySearch')
            ->setParameters([
                'querySearch' => '%' . $querySearch . '%',
            ])
            ->getQuery();

        return $query->getResult();
    }
}
