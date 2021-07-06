<?php

namespace App\Entity;

use App\Repository\LikeAnswerRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=LikeAnswerRepository::class)
 */
class LikeAnswer
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="likeAnswers")
     * @ORM\JoinColumn(nullable=false)
     */
    private $author;

    /**
     * @ORM\ManyToOne(targetEntity=ForumThreadAnswer::class, inversedBy="likeAnswers")
     * @ORM\JoinColumn(nullable=false)
     */
    private $threadAnswer;

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

    public function getThreadAnswer(): ?ForumThreadAnswer
    {
        return $this->threadAnswer;
    }

    public function setThreadAnswer(?ForumThreadAnswer $threadAnswer): self
    {
        $this->threadAnswer = $threadAnswer;

        return $this;
    }
}
