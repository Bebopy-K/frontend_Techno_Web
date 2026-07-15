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


Route::middleware('auth')->group(function () {
    Route::get('/admin', function () {
        return Inertia::render('admin/adminDashboard', [
            'articles' => Article::with('service')
                ->latest()
                ->get(),
            'products' => Product::latest()->get(),
            'services' => Service::all(),
        ]);
    })->name('admin.dashboard');

    // ARTICLE ADMIN
    Route::post('/admin/articles', [ArticleController::class, 'store'])
        ->name('admin.articles.store');

    Route::put('/admin/articles/{article}', [ArticleController::class, 'update'])
        ->name('admin.articles.update');

    Route::delete('/admin/articles/{article}', [ArticleController::class, 'destroy'])
        ->name('admin.articles.destroy');

    Route::post('/admin/products', [ProductController::class, 'store']);
    Route::put('/admin/products/{product}', [ProductController::class, 'update']);
    Route::delete('/admin/products/{product}', [ProductController::class, 'destroy']);
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
