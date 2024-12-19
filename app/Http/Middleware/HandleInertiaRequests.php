<?php

namespace App\Http\Middleware;

use Carbon\Carbon;
use Session;
use Inertia\Middleware;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */

     private function activePlan()
     {
         $user = Auth::user();
         $activePlan = $user ? $user->lastActive : null;
     
         if (!$activePlan) {
             return null;
         }
     
         // Mengakses relasi subciptionPlan dengan memanggil metode
         $subcriptionPlan = $activePlan->subciptionPlan;
     
         if (!$subcriptionPlan) {
             return null;
         }
     
         $lastDay = Carbon::parse($activePlan->updated_at)
             ->addMonths($subcriptionPlan->active_periode);
         $activeDay = Carbon::parse($activePlan->updated_at)->diffInDays($lastDay);
         $remainingActive = Carbon::parse($activePlan->expired_date)->diffInDays(Carbon::now());
     
         return [
             'name' => $subcriptionPlan->name,
             'activeDay' => $activeDay,
             'remainingActive' => $remainingActive
         ];
     }
     

    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
                'activePlan' => $this->activePlan()
            ],
            'flash' => [ 
                'message' => Session::get('message'),
                'type' => Session::get('type'),
            ]
        ];
    }
}
