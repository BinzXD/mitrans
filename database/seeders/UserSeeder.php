<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = User::create([
            'name' => 'BinzXD',
            'email' => 'bintangwiratama4@gmail.com',
            'password' => Hash::make("admin123")
        ]);
        $admin->assignRole('admin');
    }
}
