<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
    public function role()
    {
        return $this->belongsTo(Role::class);
    }

    public function getActive()
    {
        $lastActive = $this->lastActive()->first();
        if (!$lastActive || !$lastActive->expired_date) {
            return false;
        }
    
        $dataNow = Carbon::now();
        $dateExpired = Carbon::parse($lastActive->expired_date);
    
        return $dataNow->lessThanOrEqualTo($dateExpired);
    }
    
    public function lastActive()
    {
        return $this->hasOne(UserSubciprions::class)
            ->where('payment_status', 'paid')
            ->latest();
    }
    
}
