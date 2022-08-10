import React, { useState } from 'react';
import { useEffect } from 'react';

import axios from 'axios';

import {Link} from 'react-router-dom';

const endPonint = 'http://localhost:8000/api'




export const ShowDegresos = () => {


        //aqui introduzco los hooks
        const [degresos, setDegresos] = useState( [] );

        useEffect( () => {
            getAllDegresos();
        },[]);
    
        const getAllDegresos = async () =>{
    
            const respuestaDegresos = await axios.get(`${endPonint}/degresos`)
            setDegresos(respuestaDegresos.data); //IMPORTANTE EL .data QUE SI NO NO LE METEMOS LOS DATOS!!!!!!
        
          }
    
        const deleteDegreso = async (id) =>{ //para borrar un producto necesitamos pasarle el id del producto
    
        await axios.delete(`${endPonint}/degreso/${id}`);
        getAllDegresos();
    
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
        
                        
        
                        {degresos.map((degreso)=>(
                            <tr key={degreso.id}>
        
                                <td>{degreso.descripcion}</td>
                                <td>{degreso.cantidad}</td>
                                <td>
                                    <Link to={`/editDegreso/${degreso.id}`} className='btn btn-warning'>Editar</Link>
                                    <button onClick={()=>deleteDegreso(degreso.id)} className="btn btn-danger">Borrar</button>
                                </td>
                                
        
                            </tr>
                        ))}
        
                    </tbody>
        
                </table>
    
            </>
          )
        }

 