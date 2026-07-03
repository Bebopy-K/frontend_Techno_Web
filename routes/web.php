<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ArticleController;
use App\Models\Product;
use App\Http\Controllers\ServiceController;
use App\Models\Service;
use App\Models\Article;
// Route::middleware('auth')->group(function () {
//     Route::get('/dashboard', function () {
//         return Inertia::render('Dashboard');
//     });
// });

// Hapus saja nanti ini Hafiz, saya cuman mau lihat tampilannya
Route::get('/admin', function () {
    return Inertia::render('admin/adminDashboard', [
        'articles' => Article::latest()->get(),
        'products' => Product::latest()->get(),
    ]); 
});

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])
        ->name('dashboard');
    Route::post('/products', [ProductController::class, 'store']);
    Route::post('/articles', [ArticleController::class, 'store']);
    Route::delete('/articles/{article}', [ArticleController::class, 'destroy']);
});

Route::middleware('auth')->group(function () {
    Route::post('/products', [ProductController::class, 'store']);
});

Route::middleware('auth')->group(function () {
    Route::post('/products', [ProductController::class, 'store']);
    Route::delete('/products/{product}', [ProductController::class, 'destroy']);
});

Route::post('/services', [ServiceController::class, 'store']);
Route::delete('/services/{service}', [ServiceController::class, 'destroy']);
// Route::inertia('/', 'App')->name('home');

Route::get('/', function () {
    return Inertia::render('App', [
        'products' => Product::latest()->get(),
        'services' => Service::all(),
        'articles' => Article::with([
            'user',
            'service',
            'comments'
        ])->latest()->take(5)->get(),
    ]);
});

Route::get('/news', function () {
    return Inertia::render('ArticleLists', [
        'articles' => Article::with([
            'user',
            'service',
            'comments'
        ])->latest()->get(),
    ]);
})->name('news.index');

Route::get('/products', function () {
    return Inertia::render('ProductLists', [
        'products' => Product::latest()->get(),
    ]);
})->name('product');

Route::get('/services', function () {
    return Inertia::render('ServiceList');
})->name('product');

// Ambil id dari tiap artikel
Route::get('/news/{article}', function (Article $article) {
    return Inertia::render('ArticleDetails', [
        'article' => $article->load([
            'user',
            'service',
            'comments'
        ])
    ]);
})->name('news.detail');

require __DIR__.'/settings.php';
