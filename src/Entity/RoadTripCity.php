<?php

namespace App\Entity;

use App\Repository\RoadTripCityRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=RoadTripCityRepository::class)
 */
class RoadTripCity
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     */
    private $position;

    /**
     * @ORM\ManyToOne(targetEntity=City::class, inversedBy="roadTripCities")
     * @ORM\JoinColumn(nullable=false)
     */
    private $city;

    /**
     * @ORM\ManyToOne(targetEntity=City::class, inversedBy="roadTripCities")
     */
    private $previousCity;

    /**
     * @ORM\ManyToOne(targetEntity=RoadTrip::class, inversedBy="roadTripCities")
     * @ORM\JoinColumn(nullable=false)
     */
    private $roadTrip;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPosition(): ?int
    {
        return $this->position;
    }

    public function setPosition(int $position): self
    {
        $this->position = $position;

        return $this;
    }

    public function getCity(): ?City
    {
        return $this->city;
    }

    public function setCity(?City $city): self
    {
        $this->city = $city;

        return $this;
    }

    public function getPreviousCity(): ?City
    {
        return $this->previousCity;
    }

    public function setPreviousCity(?City $previousCity): self
    {
        $this->previousCity = $previousCity;

        return $this;
    }

    public function getRoadTrip(): ?RoadTrip
    {
        return $this->roadTrip;
    }

    public function setRoadTrip(?RoadTrip $roadTrip): self
    {
        $this->roadTrip = $roadTrip;

        return $this;
    }
}
