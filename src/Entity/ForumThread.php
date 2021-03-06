<?php

namespace App\Entity;

use App\Repository\ForumThreadRepository;
use DateTimeInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\HasLifecycleCallbacks()
 * @ORM\Entity(repositoryClass=ForumThreadRepository::class)
 */
class ForumThread
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
    private $title;

    /**
     * @ORM\Column(type="text")
     */
    private $description;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime")
     */
    private $updatedAt;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="forumThreads")
     * @ORM\JoinColumn(nullable=false)
     */
    private $author;

    /**
     * @ORM\ManyToOne(targetEntity=RoadTrip::class, inversedBy="forumThreads", cascade={"persist", "remove"})
     */
    private $roadTrip;

    /**
     * @ORM\OneToMany(
     *     targetEntity=ForumThreadAnswer::class,
     *      mappedBy="forumThread",
     *      cascade={"persist", "remove"},
     *     orphanRemoval=true
     *     )
     */
    private $forumThreadAnswers;

    /**
     * @ORM\OneToMany(targetEntity=Like::class, mappedBy="thread", cascade={"persist"})
     */
    private $likes;

    public function __construct()
    {
        $this->forumThreadAnswers = new ArrayCollection();
        $this->likes = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

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

    public function getCreatedAt(): ?DateTimeInterface
    {
        return $this->createdAt;
    }

    /**
     * @ORM\PrePersist()
     * @return $this
     */
    public function setCreatedAt(): self
    {
        $this->createdAt = new \DateTime();

        return $this;
    }

    public function getUpdatedAt(): ?DateTimeInterface
    {
        return $this->updatedAt;
    }

    /**
     * @ORM\PreUpdate()
     * @ORM\PrePersist()
     * @return $this
     */
    public function setUpdatedAt(): self
    {
        $this->updatedAt = new \DateTime();

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

    public function getRoadTrip(): ?RoadTrip
    {
        return $this->roadTrip;
    }

    public function setRoadTrip(?RoadTrip $roadTrip): self
    {
        $this->roadTrip = $roadTrip;

        return $this;
    }

    /**
     * @return Collection|ForumThreadAnswer[]
     */
    public function getForumThreadAnswers(): Collection
    {
        return $this->forumThreadAnswers;
    }

    public function addForumThreadAnswer(ForumThreadAnswer $forumThreadAnswer): self
    {
        if (!$this->forumThreadAnswers->contains($forumThreadAnswer)) {
            $this->forumThreadAnswers[] = $forumThreadAnswer;
            $forumThreadAnswer->setForumThread($this);
        }

        return $this;
    }

    public function removeForumThreadAnswer(ForumThreadAnswer $forumThreadAnswer): self
    {
        if ($this->forumThreadAnswers->contains($forumThreadAnswer)) {
            $this->forumThreadAnswers->removeElement($forumThreadAnswer);
            // set the owning side to null (unless already changed)
//            if ($forumThreadAnswer->getForumThread() === $this) {
//                $forumThreadAnswer->setForumThread(null);
//            }
        }

        return $this;
    }

    /**
     * @return Collection|Like[]
     */
    public function getLikes(): Collection
    {
        return $this->likes;
    }

    public function addLike(Like $like): self
    {
        if (!$this->likes->exists(function($key, $value) use ($like) {
            return ($value->getAuthor() === $like->getAuthor() && $value->getThread() === $like->getThread());
        })) {
            $this->likes[] = $like;
            $like->setThread($this);
        }

        return $this;
    }

    public function removeLike(Like $like): self
    {
        if ($this->likes->removeElement($like)) {
            // set the owning side to null (unless already changed)
            /*if ($like->getThread() === $this) {
                $like->setThread(null);
            }*/
        }

        return $this;
    }
}
