<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class fixSpend extends Model
{
    use HasFactory;
    protected $fillable = ['cantidad'];
}
