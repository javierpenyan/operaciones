<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Degreso extends Model
{
    use HasFactory;
    protected $fillable = ['cantidad', 'descripcion']; //con esto indicamos los campo que pueden ser modificados
}
