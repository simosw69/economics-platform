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
            'message' => 'Hello from Symfony!'
        ]);
    }

    #[Route('/test', name: 'test')]
    public function test(Request $request, Inertia $inertia): Response
    {
        return $inertia->render('Test', [
            'message' => 'Hello from Symfony!'
        ]);
    }
}
