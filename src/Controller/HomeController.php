<?php

namespace App\Controller;

use App\Service\Inertia;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

final class HomeController extends AbstractController
{
    #[Route('/home', name: 'app_home')]
    public function home(Request $request, Inertia $inertia): Response
    {
        return $inertia->render('Home', [
            'title' => 'Welcome to EconLearn',
            'subtitle' => 'Master economics through interactive lessons, real-world examples, and hands-on practice. Start your journey to financial literacy today.',
            'features' => [
                [
                    'icon' => '📊',
                    'title' => 'Interactive Charts',
                    'description' => 'Visualize economic concepts with dynamic, interactive data visualizations.',
                ],
                [
                    'icon' => '🎯',
                    'title' => 'Practical Exercises',
                    'description' => 'Apply what you learn with real-world scenarios and case studies.',
                ],
                [
                    'icon' => '🏆',
                    'title' => 'Track Progress',
                    'description' => 'Monitor your learning journey and earn achievements as you advance.',
                ],
            ],
        ]);
    }

    #[Route('/test', name: 'test')]
    public function test(Request $request, Inertia $inertia): Response
    {
        return $inertia->render('Test', [
            'message' => 'Hello from Symfony test!'
        ]);
    }
}
