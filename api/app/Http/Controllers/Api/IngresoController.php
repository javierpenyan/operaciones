<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Ingreso;
use Illuminate\Http\Request;



class IngresoController extends Controller
{
    
    public function index()
    {
        $ingresos = Ingreso::all();

        return $ingresos;
    }

   
    public function store(Request $request)
    {
        //guardar ingresos
        $ingreso = new Ingreso();

        $ingreso->cantidad = $request->cantidad;
        $ingreso->descripcion = $request->descripcion;

        $ingreso->save();
    }

   
    public function show($id)
    {
        $ingreso = Ingreso::find($id);

        return $ingreso;
    }

   
    public function update(Request $request, $id)
    {
        $ingreso = Ingreso::findOrFail($request->id); //tener cuidado porque este id va sin $ !!!!!!

        $ingreso->cantidad = $request->cantidad;
        $ingreso->descripcion = $request->descripcion;

        $ingreso->save();

        return $ingreso;
    }

    
    public function destroy($id)
    {
        $ingreso = Ingreso::destroy($id);

        return $ingreso;
    }
}
