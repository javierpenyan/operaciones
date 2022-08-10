import React, { useState } from 'react';
import { useEffect } from 'react';

import axios from 'axios';

import {Link} from 'react-router-dom';

const endPonint = 'http://localhost:8000/api'

export const ShowIngresos = () => {

    //aqui introduzco los hooks
    const [ingresos, setIngresos] = useState( [] );

    useEffect( () => {
        getAllIngresos();
    },[]);

    const getAllIngresos = async () =>{

        const respuestaIngresos = await axios.get(`${endPonint}/ingresos`)
        setIngresos(respuestaIngresos.data); //IMPORTANTE EL .data QUE SI NO NO LE METEMOS LOS DATOS!!!!!!
    
      }

    const deleteIngreso = async (id) =>{ //para borrar un producto necesitamos pasarle el id del producto

    await axios.delete(`${endPonint}/ingreso/${id}`);
    getAllIngresos();

    }

    


    return (
        <>

    
            {/* tabla de ingresos */}
    
            <table className='table table-striped'>
    
                <thead className='bg-primary text-white'>
    
                    <tr>
                            <th>Description</th>
                            <th>Cantidad</th>
                            <th>Acciones</th>
                    </tr>
    
                </thead>
    
                <tbody>
    
                    
    
                    {ingresos.map((ingreso)=>(
                        <tr key={ingreso.id}>
    
                            <td>{ingreso.descripcion}</td>
                            <td>{ingreso.cantidad}</td>
                            <td>
                                <Link to={`/editIngreso/${ingreso.id}`} className='btn btn-warning'>Editar</Link>
                                <button onClick={()=>deleteIngreso(ingreso.id)} className="btn btn-danger">Borrar</button>
                            </td>
                            
    
                        </tr>
                    ))}
    
                </tbody>
    
            </table>

        </>
      )
    }
    
