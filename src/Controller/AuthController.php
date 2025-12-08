<?php

namespace App\Controller;

use App\Entity\User;
use App\Service\Inertia;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\CurrentUser;

final class AuthController extends AbstractController
{
    #[Route('/login', name: 'app_login', methods: ['GET'])]
    public function loginPage(Inertia $inertia): Response
    {
        return $inertia->render('Login', []);
    }

    #[Route('/api/login', name: 'api_login', methods: ['POST'])]
    public function login(#[CurrentUser] ?User $user): JsonResponse
    {
        if (null === $user) {
            return $this->json([
                'message' => 'Invalid credentials',
            ], Response::HTTP_UNAUTHORIZED);
        }

        return $this->json([
            'user' => [
                'id' => $user->getId(),
                'email' => $user->getEmail(),
                'username' => $user->getUsername(),
                'roles' => $user->getRoles(),
            ],
        ]);
    }

    #[Route('/register', name: 'app_register', methods: ['GET'])]
    public function registerPage(Inertia $inertia): Response
    {
        return $inertia->render('Register', []);
    }

    #[Route('/api/register', name: 'api_register', methods: ['POST'])]
    public function register(
        Request $request,
        EntityManagerInterface $entityManager,
        UserPasswordHasherInterface $passwordHasher
    ): JsonResponse {
        $data = json_decode($request->getContent(), true);

        // Basic validation
        if (empty($data['email']) || empty($data['password']) || empty($data['name'])) {
            return $this->json([
                'message' => 'Email, password, and name are required',
            ], Response::HTTP_BAD_REQUEST);
        }

        if ($data['password'] !== ($data['confirmPassword'] ?? '')) {
            return $this->json([
                'message' => 'Passwords do not match',
            ], Response::HTTP_BAD_REQUEST);
        }

        // Check if user already exists
        $existingUser = $entityManager->getRepository(User::class)->findOneBy(['email' => $data['email']]);
        if ($existingUser) {
            return $this->json([
                'message' => 'User with this email already exists',
            ], Response::HTTP_CONFLICT);
        }

        // Create new user
        $user = new User();
        $user->setEmail($data['email']);
        $user->setUsername($data['name']);
        $user->setRoles([]);
        $user->setCreatedAt(new \DateTimeImmutable());

        // Hash the password
        $hashedPassword = $passwordHasher->hashPassword($user, $data['password']);
        $user->setPassword($hashedPassword);

        $entityManager->persist($user);
        $entityManager->flush();

        return $this->json([
            'message' => 'User registered successfully',
            'user' => [
                'id' => $user->getId(),
                'email' => $user->getEmail(),
                'username' => $user->getUsername(),
            ],
        ], Response::HTTP_CREATED);
    }

    #[Route('/logout', name: 'app_logout', methods: ['GET'])]
    public function logout(): void
    {
        // This method will be intercepted by the logout key on the firewall
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }
}
