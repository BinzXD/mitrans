<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class UserSubciprions extends Model
{
    use HasFactory, SoftDeletes;
    protected $table = 'user_subcriptions';
    protected $fillable = ['user_id', 'subcription_id','price', 'expired_date','payment_status','snap_token'];

    public function subciptionPlan()
    {
        return $this->belongsTo(SubcriptionPlan::class, 'subcription_id', 'id');
    }
}
