<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreArticleRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        // Saat update, gambar tidak wajib diupload ulang
        $imageRule = $this->isMethod('POST')
            ? 'required|image|mimes:jpg,jpeg,png|max:2048'
            : 'nullable|image|mimes:jpg,jpeg,png|max:2048';

        return [
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'service_id' => 'required|exists:services,id',
            'image' => $imageRule,
        ];
    }

    public function messages(): array
    {
        return [
            'title.required' => 'Judul artikel wajib diisi.',
            'content.required' => 'Isi artikel wajib diisi.',
            'service_id.required' => 'Service wajib dipilih.',
            'service_id.exists' => 'Service yang dipilih tidak valid.',
            'image.required' => 'Gambar artikel wajib dipilih.',
            'image.image' => 'File harus berupa gambar.',
            'image.mimes' => 'Format gambar harus JPG, JPEG, atau PNG.',
            'image.max' => 'Ukuran gambar maksimal 2 MB.',
        ];
    }
}