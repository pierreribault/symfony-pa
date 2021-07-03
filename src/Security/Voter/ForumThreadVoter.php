<?php

namespace App\Security\Voter;

use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\Security;
use App\Entity\ForumThread;
use App\Entity\User;

class ForumThreadVoter extends Voter
{

    const THREAD_EDIT = "thread_edit";
    const THREAD_DELETE = "thread_delete";

    private $security;

    public function __construct(Security $security) {
        $this->security = $security;
    }

    protected function supports(string $attribute, $forumThread): bool
    {
        // replace with your own logic
        // https://symfony.com/doc/current/security/voters.html
        return in_array($attribute, [self::THREAD_EDIT, self::THREAD_DELETE])
            && $forumThread instanceof \App\Entity\ForumThread;
    }

    protected function voteOnAttribute(string $attribute, $forumThread, TokenInterface $token): bool
    {
        $user = $token->getUser();
        // if the user is anonymous, do not grant access
        if (!$user instanceof UserInterface) {
            return false;
        }

        // check author
        if($forumThread->getAuthor() === null) return false;

        // ... (check conditions and return true to grant permission) ...
        switch ($attribute) {
            case self::THREAD_EDIT:
                // logic to determine if the user can EDIT
                return $this->canEdit($forumThread, $user);
                break;
            case self::THREAD_DELETE:
                // logic to determine if the user can DELETE
                return $this->canDelete($forumThread, $user);
                break;
        }

        return false;
    }

    private function canEdit(ForumThread $forumThread, User $user) {
        return $forumThread->getAuthor() === $user;
    }

    private function canDelete(ForumThread $forumThread, User $user) {
        return $forumThread->getAuthor() === $user || $this->security->isGranted("ROLE_ADMIN");
    }
}
