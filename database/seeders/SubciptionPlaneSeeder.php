<?php

namespace Database\Seeders;

use App\Models\SubcriptionPlan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SubciptionPlaneSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        SubcriptionPlan::insert([
            [
            'name' => 'Basic',
            'price' => 20000,
            'active_periode' => 3,
            'features' => json_encode(['featur 1', 'featur 2']),
            ],
            [
                'name' => 'Premium',
                'price' => 80000,
                'active_periode' => 6,
                'features' => json_encode(['featur 1', 'featur 2', 'featur 3', 'featur 4']),
            ]
    ]);
        
    }
}
