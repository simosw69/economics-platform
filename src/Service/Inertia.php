<?php
namespace App\Service;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Response;
use Twig\Environment;

class Inertia
{
    public function __construct(
        private Environment $twig,
        private RequestStack $requestStack
    ) {}

    public function render(string $component, array $props = []): Response
    {
        $request = $this->requestStack->getCurrentRequest();
        
        $page = [
            'component' => $component,
            'props' => $props,
            'url' => $request->getRequestUri(),
            'version' => '1.0',
        ];

        // If it's an Inertia request (XHR), return JSON
        if ($request->headers->get('X-Inertia')) {
            return new JsonResponse($page, 200, [
                'X-Inertia' => 'true',
            ]);
        }

        // Otherwise, return HTML with embedded page data
        return new Response(
            $this->twig->render('app.html.twig', [
                'page' => $page,
            ])
        );
    }
}