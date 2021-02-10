<?php


namespace App\Service;


use App\Entity\Contact;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Message;

class MailerService
{

    private const from = "admin";

    /**
     * @var EntityManagerInterface
     */
    private $entityManager;
    /**
     * @var MailerInterface
     */
    private $mailer;

    public function __construct(EntityManagerInterface $entityManager, MailerInterface $mailer)
    {
        $this->entityManager = $entityManager;
        $this->mailer = $mailer;
    }

    public function sendContact(Contact $contact)
    {
        $message = (new TemplatedEmail())
            ->addFrom(self::from)
            ->addTo($contact->getEmail())
            ->html("Contact")
        ;

        $this->mailer->send($message);
    }
}
