<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Movie;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index(User $user)
    {
        $features = Movie::where('is_featured', true)->get();
        $movies = Movie::all();

        return Inertia::render('User/index', [
            'features' => $features, 
            'movies' => $movies,
            'user' => $user
        ]);
    }

    public function detail(Movie $movie)
    {
        return Inertia::render('User/show', [
            'data' => $movie,
        ]);
    }
}
