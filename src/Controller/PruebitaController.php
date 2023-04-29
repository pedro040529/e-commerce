<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PruebitaController extends AbstractController
{
    #[Route('/pruebita', name: 'app_pruebita')]
    public function index(): Response
    {
        return $this->render('pruebita/index.html.twig', [
            'controller_name' => 'PruebitaController',
        ]);
    }
}
