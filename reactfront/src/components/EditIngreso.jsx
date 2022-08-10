
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

console.log("entraa");

const endPoint = 'http://localhost:8000/api/ingreso/';

export const EditIngreso = () => {



  const [cantidadIngreso, setCantidadIngreso] = useState(0);
  const [descripcionInreso, setDescripcionIngreso] = useState('');
  const navigate = useNavigate();

  const {id} = useParams();

  console.log("id-->", id);

  const update = async (e) =>{

    console.log("entraaaajfsdhlkjfdjdfjlkñfasdlkñj");

    e.preventDefault();
    await axios.put(`${endPoint}${id}`, {
      descripcion: descripcionInreso,
      cantidad: cantidadIngreso
    });

    navigate('/');

  }

  useEffect(()=>{

    const getIngresoById = async () =>{

      const response = await axios.get(`${endPoint}${id}`)
      setCantidadIngreso(response.data.cantidad);
      setDescripcionIngreso(response.data.descripcion);

    }

    getIngresoById();

  }, []);

  return (
    <>
    
    <h3>Crear Ingreso</h3>

    <form onSubmit={update}>

      <div className='mb-3'>
        <label className='form-label'>Descripcion</label>
        <input
         value={descripcionInreso}
         onChange = {(e) => setDescripcionIngreso(e.target.value)}
         type="text"
         className='form-control'
         />

        <label className='form-label'>Cantidad</label>
        <input
         value={cantidadIngreso}
         onChange = {(e) => setCantidadIngreso(e.target.value)}
         type="number"
         className='form-control'
         />

      </div>

      <button type='submit' className='btn btn-primary'>Realizar Ingreso</button>

    </form>


  
  </>
  )
}
