<?php

namespace App\Entity;

use App\Repository\CityRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=CityRepository::class)
 */
class City
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $region;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $country;

    /**
     * @ORM\Column(type="integer")
     */
    private $regionCode;

    /**
     * @ORM\Column(type="integer")
     */
    private $cityCode;

    /**
     * @ORM\Column(type="float")
     */
    private $longitude;

    /**
     * @ORM\Column(type="float")
     */
    private $latitude;

    /**
     * @ORM\OneToMany(targetEntity=RoadTripCity::class, mappedBy="city")
     */
    private $roadTripCities;

    /**
     * @ORM\OneToMany(targetEntity=RoadTripCity::class, mappedBy="previousCity")
     */
    private $roadTripPreviousCities;

    /**
     * @ORM\OneToMany(targetEntity=Activity::class, mappedBy="city")
     */
    private $activities;

    public function __construct()
    {
        $this->roadTripCities = new ArrayCollection();
        $this->roadTripPreviousCities = new ArrayCollection();
        $this->activities = new ArrayCollection();
    }

    public function __toString()
    {
        return $this->name;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getRegion(): ?string
    {
        return $this->region;
    }

    public function setRegion(string $region): self
    {
        $this->region = $region;

        return $this;
    }

    public function getCountry(): ?string
    {
        return $this->country;
    }

    public function setCountry(string $country): self
    {
        $this->country = $country;

        return $this;
    }

    public function getRegionCode(): ?int
    {
        return $this->regionCode;
    }

    public function setRegionCode(int $regionCode): self
    {
        $this->regionCode = $regionCode;

        return $this;
    }

    public function getCityCode(): ?int
    {
        return $this->cityCode;
    }

    public function setCityCode(int $cityCode): self
    {
        $this->cityCode = $cityCode;

        return $this;
    }

    public function getLongitude(): ?float
    {
        return $this->longitude;
    }

    public function setLongitude(float $longitude): self
    {
        $this->longitude = $longitude;

        return $this;
    }

    public function getLatitude(): ?float
    {
        return $this->latitude;
    }

    public function setLatitude(float $latitude): self
    {
        $this->latitude = $latitude;

        return $this;
    }

    /**
     * @return Collection|RoadTripCity[]
     */
    public function getRoadTripCities(): Collection
    {
        return $this->roadTripCities;
    }

    public function addRoadTripCity(RoadTripCity $roadTripCity): self
    {
        if (!$this->roadTripCities->contains($roadTripCity)) {
            $this->roadTripCities[] = $roadTripCity;
            $roadTripCity->setCity($this);
        }

        return $this;
    }

    public function removeRoadTripCity(RoadTripCity $roadTripCity): self
    {
        if ($this->roadTripCities->contains($roadTripCity)) {
            $this->roadTripCities->removeElement($roadTripCity);
            // set the owning side to null (unless already changed)
            if ($roadTripCity->getCity() === $this) {
                $roadTripCity->setCity(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|RoadTripCity[]
     */
    public function getRoadTripPreviousCities(): Collection
    {
        return $this->roadTripPreviousCities;
    }

    public function addRoadTripPreviousCity(RoadTripCity $roadTripPreviousCity): self
    {
        if (!$this->roadTripPreviousCities->contains($roadTripPreviousCity)) {
            $this->roadTripPreviousCities[] = $roadTripPreviousCity;
            $roadTripPreviousCity->setPreviousCity($this);
        }

        return $this;
    }

    public function removeRoadTripPreviousCity(RoadTripCity $roadTripPreviousCity): self
    {
        if ($this->roadTripPreviousCities->contains($roadTripPreviousCity)) {
            $this->roadTripPreviousCities->removeElement($roadTripPreviousCity);
            // set the owning side to null (unless already changed)
            if ($roadTripPreviousCity->getPreviousCity() === $this) {
                $roadTripPreviousCity->setPreviousCity(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Activity[]
     */
    public function getActivities(): Collection
    {
        return $this->activities;
    }

    public function addActivity(Activity $activity): self
    {
        if (!$this->activities->contains($activity)) {
            $this->activities[] = $activity;
            $activity->setCity($this);
        }

        return $this;
    }

    public function removeActivity(Activity $activity): self
    {
        if ($this->activities->contains($activity)) {
            $this->activities->removeElement($activity);
            // set the owning side to null (unless already changed)
            if ($activity->getCity() === $this) {
                $activity->setCity(null);
            }
        }

        return $this;
    }
}
