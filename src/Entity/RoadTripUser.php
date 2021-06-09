<?php

namespace App\Entity;

use App\Repository\RoadTripUserRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=RoadTripUserRepository::class)
 */
class RoadTripUser
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\OneToOne(targetEntity=User::class, cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $user;

    /**
     * @ORM\OneToOne(targetEntity=RoadTrip::class, cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $roadTrip;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getRoadTrip(): ?RoadTrip
    {
        return $this->roadTrip;
    }

    public function setRoadTrip(RoadTrip $roadTrip): self
    {
        $this->roadTrip = $roadTrip;

        return $this;
    }
}
