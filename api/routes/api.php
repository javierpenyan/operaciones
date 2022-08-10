<?php

use App\Http\Controllers\Api\DegresoController;
use App\Http\Controllers\Api\IngresoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::controller(IngresoController::class)->group(function(){

    Route::get('/ingresos', 'index'); //recordemos que el prefijo es api porque asi se llama la carpeta general
    Route::post('/ingreso', 'store');
    Route::get('/ingreso/{id}', 'show');
    Route::put('/ingreso/{id}', 'update');
    Route::delete('/ingreso/{id}', 'destroy');


});//definimos la ruta para un controlador específico y dentro introducimos todas sus rutas

Route::controller(DegresoController::class)->group(function(){

    Route::get('/degresos', 'index'); //recordemos que el prefijo es api porque asi se llama la carpeta general
    Route::post('/degreso', 'store');
    Route::get('/degreso/{id}', 'show');
    Route::put('/degreso/{id}', 'update');
    Route::delete('/degreso/{id}', 'destroy');


});

