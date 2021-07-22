<?php

namespace App\Security\Voter;

use App\Entity\Activity;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;
use Symfony\Component\Security\Core\User\UserInterface;

class ActivityVoter extends Voter
{
    protected function supports(string $attribute, $subject): bool
    {
        // replace with your own logic
        // https://symfony.com/doc/current/security/voters.html
        return in_array($attribute, ['POST_EDIT', 'POST_DELETE', 'POST_VIEW'])
            && $subject instanceof Activity;
    }

    protected function voteOnAttribute(string $attribute, $subject, TokenInterface $token): bool
    {
        $user = $token->getUser();
        // if the user is anonymous, do not grant access
        if (!$user instanceof UserInterface) {
            return false;
        }

        // ... (check conditions and return true to grant permission) ...
        switch ($attribute) {
            case 'POST_EDIT':
                return $user->getCompany()->getId() === $subject->getCompany()->getId() || in_array("ROLE_ADMIN", $user->getRoles());
            case 'POST_DELETE':
                return $user->getCompany()->getId() === $subject->getCompany()->getId() || in_array("ROLE_ADMIN", $user->getRoles());
        }

        return false;
    }
}
