<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Movie;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $features = Movie::where('is_featured', true)->get();
        $movies = Movie::all();

        return Inertia::render('User/index', [
            'features' => $features, 
            'movies' => $movies,
        ]);
    }
}
