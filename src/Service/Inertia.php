<?php

namespace App\Service;

use Symfony\Component\HttpFoundation\JsonResponse;

class Inertia
{
    public function render(string $component, array $props = []): JsonResponse
    {
        return new JsonResponse([
            'component' => $component,
            'props' => $props,
        ]);
    }
}
