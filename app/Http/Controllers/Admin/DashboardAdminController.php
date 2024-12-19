<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\Movie;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\MovieStoreRequest;

class DashboardAdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $movie = Movie::all();
        return Inertia::render('Admin/index')->with('movie', $movie);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Movie/created');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(MovieStoreRequest $request)
    {
        $data = $request->validated();
        
        if ($request->hasFile('thumbnail')) {
            $file = $request->file('thumbnail');
            $fileName = time() . '_' . $file->getClientOriginalName();
        
            $file->move(public_path('assets/upload'), $fileName);
            $data['thumbnail'] = 'assets/upload/' . $fileName;
        }
        
        
        $data['slug'] = Str::slug($data['name']);
        try {
            $Movie = new Movie($data);
            $Movie->save();
            return redirect()->route('admin.dashboardmovie.index')->with([
                'success' => 'Movie created successfully',
                'type' => 'success'
            ]);
        } catch (\Throwable $th) {
            \Log::error('Error creating movie: ' . $th->getMessage(), [
                'trace' => $th->getTraceAsString(),
            ]);

            return redirect()
                ->back()
                ->withInput()
                ->with('error', 'Failed to create movie. Please try again.');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
