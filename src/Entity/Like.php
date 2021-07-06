<?php

namespace App\Entity;

use App\Repository\LikeRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=LikeRepository::class)
 * @ORM\Table(name="`like`")
 */
class Like
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="likes")
     * @ORM\JoinColumn(nullable=false)
     */
    private $author;

    /**
     * @ORM\ManyToOne(targetEntity=ForumThread::class, inversedBy="likes")
     * @ORM\JoinColumn(nullable=false)
     */
    private $thread;

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

    public function getThread(): ?ForumThread
    {
        return $this->thread;
    }

    public function setThread(?ForumThread $thread): self
    {
        $this->thread = $thread;

        return $this;
    }
}
