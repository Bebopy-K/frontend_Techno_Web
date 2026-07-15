<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $casts = [
        'features' => 'array',
    ];
    
    protected $fillable = [
        'user_id',
        'title',
        'description',
        'category',
        'image',
        'features',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}