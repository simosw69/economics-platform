<?php

namespace App\Response;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class InertiaResponse
{
    public static function render(Request $request, string $component, array $props = []): Response
    {
        $page = [
            'component' => $component,
            'props' => $props,
            'url' => $request->getRequestUri(),
            'version' => null,
        ];

        return new JsonResponse($page);
    }
}
