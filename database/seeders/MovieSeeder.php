<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class MovieSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Movie::insert([
            [
                'name' => 'The Goblin',
                'slug' => Str::slug('The Goblin'),
                'category' => 'Animations',
                'video_url' => 'https://youtu.be/NstU6CxBm2Q?si=mLFR5eYf4CmQOD18',
                'thumbnail' => 'default.jpg',
                'rating' => 3.8,
                'is_featured' => 0
            ],
            [
                'name' => 'Spiderman',
                'slug' => Str::slug('Spiderman'),
                'category' => 'SuperHero',
                'video_url' => 'https://youtu.be/NstU6CxBm2Q?si=mLFR5eYf4CmQOD18',
                'thumbnail' => 'default.jpg',
                'rating' => 4.2,
                'is_featured' => 1
            ],
            [
                'name' => 'Never Lose',
                'slug' => Str::slug('Never Lose'),
                'category' => 'Romance',
                'video_url' => 'https://youtu.be/NstU6CxBm2Q?si=mLFR5eYf4CmQOD18',
                'thumbnail' => 'default.jpg',
                'rating' => 8.4,
                'is_featured' => 0
            ],
            ]);
    }
}
