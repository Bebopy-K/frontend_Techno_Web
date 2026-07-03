<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
        ]);

        Service::create([
            'name' => $request->name,
        ]);

        return back()->with('success', 'Service berhasil ditambahkan.');
    }

    public function destroy(Service $service)
    {
        $service->delete();

        return back()->with('success', 'Service berhasil dihapus.');
    }
}