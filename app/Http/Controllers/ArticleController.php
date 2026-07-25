<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreArticleRequest;
use App\Models\Article;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class ArticleController extends Controller
{
    public function store(StoreArticleRequest $request)
    {
        $image = $request->file('image')->store('articles', 'public');

        Article::create([
            'user_id'    => Auth::id(),
            'service_id' => $request->service_id,
            'title'      => $request->title,
            'content'    => $request->content,
            'image'      => $image,
        ]);

        return redirect()->back()->with(
            'success',
            'Artikel berhasil ditambahkan.'
        );
    }

    public function update(StoreArticleRequest $request, Article $article)
    {
        $data = [
            'service_id' => $request->service_id,
            'title'      => $request->title,
            'content'    => $request->content,
        ];

        // Jika admin mengupload gambar baru
        if ($request->hasFile('image')) {

            // Hapus gambar lama
            if (
                $article->image &&
                Storage::disk('public')->exists($article->image)
            ) {
                Storage::disk('public')->delete($article->image);
            }

            // Simpan gambar baru
            $data['image'] = $request
                ->file('image')
                ->store('articles', 'public');
        }

        $article->update($data);

        return redirect()->back()->with(
            'success',
            'Artikel berhasil diperbarui.'
        );
    }

    public function destroy(Article $article)
    {
        if (
            $article->image &&
            Storage::disk('public')->exists($article->image)
        ) {
            Storage::disk('public')->delete($article->image);
        }

        $article->delete();

        return redirect()->back()->with(
            'success',
            'Artikel berhasil dihapus.'
        );
    }
}