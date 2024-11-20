<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\User\DashboardController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('admin', function() {
//     return 'Hi admin';
// })->middleware('role:admin');

// Route::get('user', function() {
//     return 'Hi user';
// })->middleware('role:user');



Route::redirect('/', '/login');
route::get('/login', function () {
    return Inertia::render('Auth/Login');
})->name('login');

Route::middleware(['auth', 'role:user'])->prefix('dashboard')->name('user.dashboard')->group(function() {
    Route::get('/user', [DashboardController::class, 'index'])->name('dashboarddd');
});


Route::prefix('prototype')->group(function () {

    route::get('/register', function () {
        return Inertia::render('Auth/Register');
    })->name('register');

    route::get('/dashboard', function () {
        return Inertia::render('Prototype/Dashboard');
    })->name('dashboard');

    route::get('/subcribe', function () {
        return Inertia::render('Prototype/Subcribe');
    })->name('subcribe');

    route::get('/movie/{slug}', function() {
        return Inertia::render('Prototype/Details');
    })->name('details');
});



Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'role:admin'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
