<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * @ORM\Entity(repositoryClass=UserRepository::class)
 * @ORM\Table(name="`user`")
 * @UniqueEntity(fields={"email"}, message="There is already an account with this email")
 */
class User implements UserInterface
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=180, unique=true)
     */
    private $email;

    /**
     * @ORM\Column(type="json")
     */
    private $roles = ["ROLE_USER"];

    /**
     * @var string The hashed password
     * @ORM\Column(type="string")
     */
    private $password;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isVerified = false;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $address;

    /**
     * @ORM\Column(type="string", length=30, nullable=true)
     */
    private $phone;

    /**
     * @ORM\Column(type="boolean", options={"default":0})
     */
    private $enabled = false;

    /**
     * @ORM\OneToOne(targetEntity=Person::class, mappedBy="account", cascade={"persist", "remove"})
     */
    private $person;

    /**
     * @ORM\OneToOne(targetEntity=Company::class, mappedBy="account", cascade={"persist", "remove"})
     */
    private $company;

    /**
     * @ORM\OneToMany(targetEntity=RoadTrip::class, mappedBy="author")
     */
    private $roadTrips;

    /**
     * @ORM\OneToMany(targetEntity=ForumThread::class, mappedBy="author")
     */
    private $forumThreads;

    /**
     * @ORM\OneToMany(targetEntity=ForumThreadAnswer::class, mappedBy="author")
     */
    private $forumThreadAnswers;

    /**
     * @ORM\OneToMany(targetEntity=Like::class, mappedBy="author")
     */
    private $likes;

    public function __construct()
    {
        $this->roadTrips = new ArrayCollection();
        $this->forumThreads = new ArrayCollection();
        $this->forumThreadAnswers = new ArrayCollection();
        $this->likes = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function __toString(): string
    {
        return $this->email;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUsername(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getPassword(): string
    {
        return (string) $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getSalt()
    {
        // not needed when using the "bcrypt" algorithm in security.yaml
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function isVerified(): bool
    {
        return $this->isVerified;
    }

    public function setIsVerified(bool $isVerified): self
    {
        $this->isVerified = $isVerified;

        return $this;
    }

    public function getAddress(): ?string
    {
        return $this->address;
    }

    public function setAddress(?string $address): self
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

    public function getEnabled(): ?bool
    {
        return $this->enabled;
    }

    public function setEnabled(bool $enabled): self
    {
        $this->enabled = $enabled;

        return $this;
    }

    public function getPerson(): ?Person
    {
        return $this->person;
    }

    public function setPerson(Person $person): self
    {
        $this->person = $person;

        // set the owning side of the relation if necessary
        if ($person->getAccount() !== $this) {
            $person->setAccount($this);
        }

        return $this;
    }

    public function getCompany(): ?Company
    {
        return $this->company;
    }

    public function setCompany(Company $company): self
    {
        $this->company = $company;

        // set the owning side of the relation if necessary
        if ($company->getAccount() !== $this) {
            $company->setAccount($this);
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

    public function addRoadTrip(RoadTrip $roadTrip): self
    {
        if (!$this->roadTrips->contains($roadTrip)) {
            $this->roadTrips[] = $roadTrip;
            $roadTrip->setAuthor($this);
        }

        return $this;
    }

    public function removeRoadTrip(RoadTrip $roadTrip): self
    {
        if ($this->roadTrips->contains($roadTrip)) {
            $this->roadTrips->removeElement($roadTrip);
            // set the owning side to null (unless already changed)
            if ($roadTrip->getAuthor() === $this) {
                $roadTrip->setAuthor(null);
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
            $forumThread->setAuthor($this);
        }

        return $this;
    }

    public function removeForumThread(ForumThread $forumThread): self
    {
        if ($this->forumThreads->contains($forumThread)) {
            $this->forumThreads->removeElement($forumThread);
            // set the owning side to null (unless already changed)
            if ($forumThread->getAuthor() === $this) {
                $forumThread->setAuthor(null);
            }
        }

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
            $forumThreadAnswer->setAuthor($this);
        }

        return $this;
    }

    public function removeForumThreadAnswer(ForumThreadAnswer $forumThreadAnswer): self
    {
        if ($this->forumThreadAnswers->contains($forumThreadAnswer)) {
            $this->forumThreadAnswers->removeElement($forumThreadAnswer);
            // set the owning side to null (unless already changed)
            if ($forumThreadAnswer->getAuthor() === $this) {
                $forumThreadAnswer->setAuthor(null);
            }
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
        if (!$this->likes->contains($like)) {
            $this->likes[] = $like;
            $like->setAuthor($this);
        }

        return $this;
    }

    public function removeLike(Like $like): self
    {
        if ($this->likes->removeElement($like)) {
            // set the owning side to null (unless already changed)
            if ($like->getAuthor() === $this) {
                $like->setAuthor(null);
            }
        }

        return $this;
    }
}
