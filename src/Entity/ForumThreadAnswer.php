<?php

namespace App\Entity;

use App\Repository\ForumThreadAnswerRepository;
use DateTime;
use DateTimeInterface;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\HasLifecycleCallbacks()
 * @ORM\Entity(repositoryClass=ForumThreadAnswerRepository::class)
 */
class ForumThreadAnswer
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="forumThreadAnswers")
     * @ORM\JoinColumn(nullable=false)
     */
    private $author;

    /**
     * @ORM\ManyToOne(targetEntity=ForumThread::class, inversedBy="forumThreadAnswers")
     * @ORM\JoinColumn(nullable=false)
     */
    private $forumThread;

    /**
     * @ORM\Column(type="text")
     */
    private $content;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

    public function getId(): ?int
    {
        return $this->id;
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

    public function getForumThread(): ?ForumThread
    {
        return $this->forumThread;
    }

    public function setForumThread(?ForumThread $forumThread): self
    {
        $this->forumThread = $forumThread;

        return $this;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(string $content): self
    {
        $this->content = $content;

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
    public function setUpdatedAt(): self
    {
        $this->updatedAt = new DateTime();

        return $this;
    }
}
