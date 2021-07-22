<?php

namespace App\Security\Voter;

use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\Security;
use App\Entity\ForumThreadAnswer;
use App\Entity\User;

class ForumThreadAnswerVoter extends Voter
{
    const ANSWER_EDIT = "answer_edit";
    const ANSWER_DELETE = "answer_delete";

    private $security;

    public function __construct(Security $security) {
        $this->security = $security;
    }

    protected function supports(string $attribute, $forumThreadAnswer): bool
    {
        // replace with your own logic
        // https://symfony.com/doc/current/security/voters.html
        return in_array($attribute, [self::ANSWER_EDIT, self::ANSWER_DELETE])
            && $forumThreadAnswer instanceof \App\Entity\ForumThreadAnswer;
    }

    protected function voteOnAttribute(string $attribute, $forumThreadAnswer, TokenInterface $token): bool
    {
        $user = $token->getUser();
        // if the user is anonymous, do not grant access
        if (!$user instanceof UserInterface) {
            return false;
        }

        // check author
        if($forumThreadAnswer->getAuthor() === null) return false;

        // ... (check conditions and return true to grant permission) ...
        switch ($attribute) {
            case self::ANSWER_EDIT:
                // logic to determine if the user can EDIT
                return $this->canEdit($forumThreadAnswer, $user);
                break;
            case self::ANSWER_DELETE:
                // logic to determine if the user can DELETE
                return $this->canDelete($forumThreadAnswer, $user);
                break;
        }

        return false;
    }

    private function canEdit(ForumThreadAnswer $forumThreadAnswer, User $user) {
        return $forumThreadAnswer->getAuthor() === $user;
    }

    private function canDelete(ForumThreadAnswer $forumThreadAnswer, User $user) {
        return $forumThreadAnswer->getAuthor() === $user || $this->security->isGranted("ROLE_ADMIN");
    }
}
