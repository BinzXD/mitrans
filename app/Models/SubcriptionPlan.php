<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class SubcriptionPlan extends Model
{
    use HasFactory, SoftDeletes;
    protected $table = 'subscription_plans';
    protected $fillable = ['name', 'price', 'active_periode','features'];
}
