<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProductRequest;
use App\Models\Product;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    public function store(StoreProductRequest $request)
    {
        $image = $request->file('image')->store('products', 'public');
        Product::create([
            'user_id' => Auth::id(),
            'title' => $request->title,
            'description' => $request->description,
            'category' => $request->category,
            'image' => $image,
        ]);
        return redirect()->back()->with('success', 'Produk berhasil ditambahkan.');

    }
    
    public function destroy(Product $product)
    {
        if ($product->image && Storage::disk('public')->exists($product->image)) {
            Storage::disk('public')->delete($product->image);
        }

        $product->delete();

        return redirect()->back()->with(
            'success',
            'Produk berhasil dihapus.'
        );
    }
}