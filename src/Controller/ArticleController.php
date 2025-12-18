<?php

namespace App\Controller;

use App\Entity\Article;
use App\Service\Inertia;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\CurrentUser;
use Symfony\Component\String\Slugger\SluggerInterface;

final class ArticleController extends AbstractController
{
    #[Route('/articles/create', name: 'app_articles_create_page', methods: ['GET'])]
    public function createPage(Inertia $inertia): Response
    {
        return $inertia->render('CreateArticle', [
            'user' => null,
        ]);
    }

    #[Route('/api/articles', name: 'api_articles_create', methods: ['POST'])]
    public function create(
        Request $request,
        EntityManagerInterface $entityManager,
        SluggerInterface $slugger
    ): JsonResponse {
        $data = json_decode($request->getContent(), true);

        if (empty($data['title']) || empty($data['content'])) {
            return $this->json(['message' => 'Title and content are required'], Response::HTTP_BAD_REQUEST);
        }

        $article = new Article();
        $article->setTitle($data['title']);
        $article->setContent($data['content']);
        $article->setCreatedAt(new \DateTimeImmutable());
        
        // Simple slug generation
        $slug = $slugger->slug($data['title'])->lower();
        // Append a unique ID to avoid collisions
        $article->setSlug($slug . '-' . uniqid());

        $entityManager->persist($article);
        $entityManager->flush();

        return $this->json([
            'message' => 'Article created successfully',
            'article' => [
                'id' => $article->getId(),
                'title' => $article->getTitle(),
                'slug' => $article->getSlug(),
            ]
        ], Response::HTTP_CREATED);
    }
    #[Route('/articles', name: 'app_articles_index', methods: ['GET'])]
    public function index(EntityManagerInterface $entityManager, Inertia $inertia): Response
    {
        $articles = $entityManager->getRepository(Article::class)->findBy([], ['created_at' => 'DESC']);

        return $inertia->render('Articles', [
            'articles' => array_map(fn (Article $article) => [
                'id' => $article->getId(),
                'title' => $article->getTitle(),
                'slug' => $article->getSlug(),
                'content' => $article->getContent(), // Content will be truncated on frontend or here
                'created_at' => $article->getCreatedAt()->format('Y-m-d'),
            ], $articles),
            'user' => null,
        ]);
    }

    #[Route('/articles/{slug}', name: 'app_articles_show', methods: ['GET'])]
    public function show(string $slug, EntityManagerInterface $entityManager, Inertia $inertia): Response
    {
        $article = $entityManager->getRepository(Article::class)->findOneBy(['slug' => $slug]);

        if (!$article) {
            throw $this->createNotFoundException('Article not found');
        }

        return $inertia->render('ArticleDetail', [
            'article' => [
                'id' => $article->getId(),
                'title' => $article->getTitle(),
                'slug' => $article->getSlug(),
                'content' => $article->getContent(),
                'created_at' => $article->getCreatedAt()->format('Y-m-d'),
            ],
            'user' => null,
        ]);
    }
}
