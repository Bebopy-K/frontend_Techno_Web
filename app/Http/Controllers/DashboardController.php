<?php

namespace App\Http\Controllers;

use App\Models\Service;
use App\Models\Product;
use App\Models\Article;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $products = Product::select(
            'id',
            'title',
            'description',
            'category',
            'image',
            'features',
            'created_at'
        )
        ->latest()
        ->get();

        $articles = Article::select(
            'id',
            'title',
            'content',
            'image',
            'tags',
            'created_at'
        )
        ->latest()
        ->get();

        $services = Services::select(
            'id',
            'name'
        )
        ->latest()
        ->get();


        return Inertia::render('Dashboard', [
            'products' => $products,
            'articles' => $articles,
            'services' => $services,
        ]);
    }
}