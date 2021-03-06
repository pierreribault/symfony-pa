<?php

namespace App\Entity;

use App\Repository\ActivityRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\MaxDepth;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\SerializedName;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ORM\Entity(repositoryClass=ActivityRepository::class)
 * @Vich\Uploadable
 * @ORM\HasLifecycleCallbacks()
 */
class Activity
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
    private  $name;

    /**
     * @ORM\Column(type="text")
     */
    private  $description;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private  $reservationUrl;

    /**
     * @ORM\Column(type="text")
     */
    private  $address;

    /**
     * @ORM\Column(type="string", length=30, nullable=true)
     */
    private  $phone;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $longitude;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $latitude;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $menu;

    /**
     *
     * @ORM\ManyToOne(targetEntity=City::class, inversedBy="activities")
     * @ORM\JoinColumn(nullable=false)
     */
    private $city;

    /**
     *
     * @ORM\ManyToOne(targetEntity=Company::class, inversedBy="activities")
     * @ORM\JoinColumn(nullable=false)
     */
    private $company;

    /**
     * @ORM\ManyToMany(targetEntity=Category::class, mappedBy="activities")
     */
    private $categories;

    /**
     * @ORM\OneToMany(targetEntity=Image::class, mappedBy="activity", orphanRemoval=true, cascade={"persist", "remove"})
     */
    private $images;

    /**
     * @ORM\ManyToMany(targetEntity=RoadTrip::class, mappedBy="activities")
     */
    private $roadTrips;

    /**
     * @ORM\Column(type="date", nullable=true)
     * @var \DateTime
     */
    private $createdAt;

    public function __construct()
    {
        $this->categories = new ArrayCollection();
        $this->images = new ArrayCollection();
        $this->roadTrips = new ArrayCollection();
    }

    public function getId(): int
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

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getReservationUrl(): ?string
    {
        return $this->reservationUrl;
    }

    public function setReservationUrl(?string $reservationUrl): self
    {
        $this->reservationUrl = $reservationUrl;

        return $this;
    }

    public function getAddress(): ?string
    {
        return $this->address;
    }

    public function setAddress(string $address): self
    {
        $this->address = $address;

        return $this;
    }

    public function getPhone(): ?string
    {
        return $this->phone;
    }

    public function setPhone(?string $phone): self
    {
        $this->phone = $phone;

        return $this;
    }

    public function getMenu(): ?string
    {
        return $this->menu;
    }

    public function setMenu(?string $menu): self
    {
        $this->menu = $menu;

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

    public function getCity(): ?City
    {
        return $this->city;
    }

    public function setCity(?City $city): self
    {
        $this->city = $city;

        return $this;
    }

    public function getCompany(): ?Company
    {
        return $this->company;
    }

    public function setCompany(?Company $company): self
    {
        $this->company = $company;

        return $this;
    }

    /**
     * @return Collection|Category[]
     */
    public function getCategories(): Collection
    {
        return $this->categories;
    }

    public function addCategory(Category $category): self
    {
        if (!$this->categories->contains($category)) {
            $this->categories[] = $category;
            $category->addActivity($this);
        }

        return $this;
    }

    public function removeCategory(Category $category): self
    {
        if ($this->categories->contains($category)) {
            $this->categories->removeElement($category);
            $category->removeActivity($this);
        }

        return $this;
    }

    /**
     * @return Collection|Image[]
     */
    public function getImages(): Collection
    {
        return $this->images;
    }

    public function addImage(Image $image): self
    {
        if (!$this->images->contains($image)) {
            $this->images[] = $image;
            $image->setActivity($this);
        }

        return $this;
    }

    public function removeImage(Image $image): self
    {
        if ($this->images->removeElement($image)) {
            // set the owning side to null (unless already changed)
            if ($image->getActivity() === $this) {
                $image->setActivity(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|RoadTrip[]
     */
    public function getRoadTrips(): Collection
    {
        return $this->roadTrips;
    }
    public function addRoadTrips(RoadTrip $roadTrip): self
    {
        if (!$this->roadTrips->contains($roadTrip)) {
            $this->roadTrips[] = $roadTrip;
            $roadTrip->addActivity($this);
        }
        return $this;
    }
    public function removeRoadTrip(RoadTrip $roadTrip): self
    {
        if ($this->roadTrips->contains($roadTrip)) {
            $this->roadTrips->removeElement($roadTrip);
            $roadTrip->removeActivity($this);
        }
        return $this;
    }

    /**
     * @return \DateTime
     */
    public function getCreatedAt(): \DateTime
    {
        return $this->createdAt;
    }

    /**
     * @ORM\PrePersist()
     * @param \DateTime $createdAt
     */
    public function setCreatedAt(): void
    {
        $this->createdAt = new \DateTime();
    }


}
