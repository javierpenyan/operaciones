<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Degreso;
use Illuminate\Http\Request;


class DegresoController extends Controller
{
    
    public function index()
    {
        $degresos = Degreso::all();

        return $degresos;

    }

    
    public function store(Request $request)
    {
        //instancia para guardar
        $degreso = new Degreso();

        $degreso->cantidad = $request->cantidad;
        $degreso->descripcion = $request->descripcion;

        $degreso->save();

    }

    
    public function show($id)
    {
        $degreso = Degreso::find($id);

        return $degreso;
    }

    
    public function update(Request $request, $id)
    {
        $degreso = Degreso::findOrFail($request->id); //tener cuidado porque este id va sin $ !!!!!!

        $degreso->cantidad = $request->cantidad;
        $degreso->descripcion = $request->descripcion;

        $degreso->save();
        return $degreso;
    }

    
    public function destroy($id)
    {
        $degreso = Degreso::destroy($id);

        return $degreso;
    }
}
