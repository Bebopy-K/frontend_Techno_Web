<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
