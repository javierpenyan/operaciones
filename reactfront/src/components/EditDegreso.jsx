import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

console.log("entraa");

const endPoint = 'http://localhost:8000/api/degreso/';

export const EditDegreso = () => {

  const [cantidadDegreso, setCantidadDegreso] = useState(0);
  const [descripcionDegreso, setDescripcionDegreso] = useState('');
  const navigate = useNavigate();

  const {id} = useParams();

  console.log("id-->", id);

  const update = async (e) =>{

    console.log("entraaaajfsdhlkjfdjdfjlkñfasdlkñj");

    e.preventDefault();
    await axios.put(`${endPoint}${id}`, {
      descripcion: descripcionDegreso,
      cantidad: cantidadDegreso
    });

    navigate('/');

  }

  useEffect(()=>{

    const getDegresoById = async () =>{

      const response = await axios.get(`${endPoint}${id}`)
      setCantidadDegreso(response.data.cantidad);
      setDescripcionDegreso(response.data.descripcion);

    }

    getDegresoById();

  }, []);


  return (
    <>
    
    <h3>Crear Ingreso</h3>

    <form onSubmit={update}>

      <div className='mb-3'>
        <label className='form-label'>Descripcion</label>
        <input
         value={descripcionDegreso}
         onChange = {(e) => setDescripcionDegreso(e.target.value)}
         type="text"
         className='form-control'
         />

        <label className='form-label'>Cantidad</label>
        <input
         value={cantidadDegreso}
         onChange = {(e) => setCantidadDegreso(e.target.value)}
         type="number"
         className='form-control'
         />

      </div>

      <button type='submit' className='btn btn-primary'>Realizar Ingreso</button>

    </form>


  
  </>
  )
}
