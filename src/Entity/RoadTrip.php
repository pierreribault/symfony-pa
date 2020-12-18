<?php

namespace App\Entity;

use App\Repository\RoadTripRepository;
use DateTime;
use DateTimeInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\HasLifecycleCallbacks()
 * @ORM\Entity(repositoryClass=RoadTripRepository::class)
 */
class RoadTrip
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime")
     */
    private $updatedAt;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="roadTrips")
     * @ORM\JoinColumn(nullable=false)
     */
    private $author;

    /**
     * @ORM\OneToMany(targetEntity=RoadTripCity::class, mappedBy="roadTrip")
     */
    private $roadTripCities;

    /**
     * @ORM\OneToMany(targetEntity=ForumThread::class, mappedBy="roadTrip")
     */
    private $forumThreads;

    public function __construct()
    {
        $this->roadTripCities = new ArrayCollection();
        $this->forumThreads = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCreatedAt(): ?DateTimeInterface
    {
        return $this->createdAt;
    }

    /**
     * @ORM\PrePersist()
     * @return $this
     */
    protected function setCreatedAt(): self
    {
        $this->createdAt = new DateTime();

        return $this;
    }

    public function getUpdatedAt(): ?DateTimeInterface
    {
        return $this->updatedAt;
    }

    /**
     * @ORM\PreUpdate()
     * @return $this
     */
    protected function setUpdatedAt(): self
    {
        $this->updatedAt = new DateTime();

        return $this;
    }

    public function getAuthor(): ?User
    {
        return $this->author;
    }

    public function setAuthor(?User $author): self
    {
        $this->author = $author;

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
            $roadTripCity->setRoadTrip($this);
        }

        return $this;
    }

    public function removeRoadTripCity(RoadTripCity $roadTripCity): self
    {
        if ($this->roadTripCities->contains($roadTripCity)) {
            $this->roadTripCities->removeElement($roadTripCity);
            // set the owning side to null (unless already changed)
            if ($roadTripCity->getRoadTrip() === $this) {
                $roadTripCity->setRoadTrip(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|ForumThread[]
     */
    public function getForumThreads(): Collection
    {
        return $this->forumThreads;
    }

    public function addForumThread(ForumThread $forumThread): self
    {
        if (!$this->forumThreads->contains($forumThread)) {
            $this->forumThreads[] = $forumThread;
            $forumThread->setRoadTrip($this);
        }

        return $this;
    }

    public function removeForumThread(ForumThread $forumThread): self
    {
        if ($this->forumThreads->contains($forumThread)) {
            $this->forumThreads->removeElement($forumThread);
            // set the owning side to null (unless already changed)
            if ($forumThread->getRoadTrip() === $this) {
                $forumThread->setRoadTrip(null);
            }
        }

        return $this;
    }
}
