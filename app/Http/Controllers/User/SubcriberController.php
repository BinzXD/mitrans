<?php

namespace App\Http\Controllers\User;

use Midtrans;
use Carbon\Carbon;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\SubcriptionPlan;
use App\Models\UserSubciprions;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class SubcriberController extends Controller
{
    public function __construct()
    {
        // Set your Merchant Server Key
        \Midtrans\Config::$serverKey = env('MIDTRANS_SERVER_KEY');
        // Set to Development/Sandbox Environment (default). Set to true for Production Environment (accept real transaction).
        \Midtrans\Config::$isProduction = false;
        // Set sanitization on (default)
        \Midtrans\Config::$isSanitized = false;
        // Set 3DS transaction for credit card to true
        \Midtrans\Config::$is3ds = false;
    }
    public function index()
    {
        $subcriber = SubcriptionPlan::all();
        return Inertia::render('User/subcriber', [
            'data' => $subcriber,
            'userSubscription' => null
        ]);
    }

    public function subcriber(Request $request, SubcriptionPlan $subcriptionPlan)
    {
        try{
            DB::beginTransaction();
        $data = [
            'user_id' => Auth::id(),
            'subcription_id' => $subcriptionPlan->id,
            'price' => $subcriptionPlan->price,
            'payment_status' => 'pending'

        ];
        $result = UserSubciprions::create($data);

        $params = [
            'transaction_details' => [
                'order_id' => $result->id. '-' . Str::random(5),
                'gross_amount' => $result->price,
            ]
        ];

        $snapToken = \Midtrans\Snap::getSnapToken($params);
        DB::table('user_subcriptions')
        ->where('id',$result->id)
        ->update(['snap_token' => $snapToken]);

        $updatedSubscription = UserSubciprions::find($result->id);   
        

        DB::commit();
        
        return Inertia::render('User/subcriber', [
            'userSubscription' => $updatedSubscription
        ]);
        } catch (\Throwable $th) {
            DB::rollBack();
        }
    }
}
