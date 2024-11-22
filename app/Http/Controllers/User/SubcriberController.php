<?php

namespace App\Http\Controllers\User;

use Carbon\Carbon;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\SubcriptionPlan;
use App\Http\Controllers\Controller;
use App\Models\UserSubciprions;
use Illuminate\Support\Facades\Auth;

class SubcriberController extends Controller
{
    public function index()
    {
        $subcriber = SubcriptionPlan::all();
        return Inertia::render('User/subcriber', [
            'data' => $subcriber
        ]);
    }

    public function subcriber(Request $request, SubcriptionPlan $subcriptionPlan)
    {
        $data = [
            'user_id' => Auth::id(),
            'subcription_id' => $subcriptionPlan->id,
            'price' => $subcriptionPlan->price,
            'expired_date' => Carbon::now()->addMonths($subcriptionPlan->active_periode),
            'payment_status' => 'success'

        ];
        UserSubciprions::create($data);
        return redirect(route('user.dashboarddasuser'));
    }
}
