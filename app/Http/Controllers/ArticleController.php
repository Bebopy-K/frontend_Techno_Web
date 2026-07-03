<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreArticleRequest;
use App\Models\Article;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use App\Models\Service;

class ArticleController extends Controller
{
    public function store(StoreArticleRequest $request)
    {
        $image = $request->file('image')->store('articles', 'public');

        Article::create([
            'user_id' => Auth::id(),
            'title' => $request->title,
            'content' => $request->content,
            'services' => $request->services,
            'image' => $image,
        ]);

        return redirect()->back()->with(
            'success',
            'Artikel berhasil ditambahkan.'
        );
    }

    public function destroy(Article $article)
    {
        if ($article->image && Storage::disk('public')->exists($article->image)) {
            Storage::disk('public')->delete($article->image);
        }

        $article->delete();

        return redirect()->back()->with(
            'success',
            'Artikel berhasil dihapus.'
        );
    }
}