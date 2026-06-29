<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ArticleController;


// Route::middleware('auth')->group(function () {
//     Route::get('/dashboard', function () {
//         return Inertia::render('Dashboard');
//     });
// });

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

Route::inertia('/', 'App')->name('home');

Route::get('/news', function () {
    return Inertia::render('ArticleLists');
})->name('news.index');

Route::get('/products', function () {
    return Inertia::render('ProductLists');
})->name('product');

Route::get('/services', function () {
    return Inertia::render('ServiceList');
})->name('product');

// Ambil id dari tiap artikel
Route::get('/news/{id}', function ($id) {
    return Inertia::render('ArticleDetails', [
        'id' => (int)$id
    ]);
})->name('news.detail');

require __DIR__.'/settings.php';
