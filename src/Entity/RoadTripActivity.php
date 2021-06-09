<?php

namespace App\Entity;

use App\Repository\RoadTripActivityRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=RoadTripActivityRepository::class)
 */
class RoadTripActivity
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\OneToOne(targetEntity=Activity::class, cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $activity;

    /**
     * @ORM\OneToOne(targetEntity=RoadTrip::class, cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $roadTrip;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getActivity(): ?Activity
    {
        return $this->activity;
    }

    public function setActivity(Activity $activity): self
    {
        $this->activity = $activity;

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
