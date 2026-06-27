<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'App')->name('home');

require __DIR__.'/settings.php';
