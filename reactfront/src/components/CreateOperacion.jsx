import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'


const endPoint = `http://localhost:8000/api/ingreso`; //al crear usabamos product
const endPoint2 = `http://localhost:8000/api/degreso`; //al crear usabamos product


const CreateProduct = () => {

    const [cantidad, setCantidad] = useState(0);
    const [descripcion, setDescripcion] = useState('');

    const [cantidadDegreso, setCantidadDegreso] = useState(0);
    const [descripcionDegreso, setDescripcionDegreso] = useState('');


    const navigate = useNavigate();

    const store = async(event) =>{
        event.preventDefault();
        await axios.post(endPoint, {cantidad: cantidad, descripcion: descripcion})
        navigate('/');
    }

    const storeDegreso= async(event) =>{
      event.preventDefault();
      await axios.post(endPoint2, {cantidad: cantidadDegreso, descripcion: descripcionDegreso})
      navigate('/');
  }

  return (
    <div>
        <h3>Create Ingreso</h3>
        <form onSubmit={store}>
            <div className='mb-3'>
                <label className='form-label'>Description</label>
                <input 
                    value={descripcion}
                    onChange={ (e) => setDescripcion(e.target.value)}
                    type="text"
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Cantidad</label>
                <input 
                    value={cantidad}
                    onChange={ (e) => setCantidad(e.target.value)}
                    type="number"
                    className='form-control'
                />
            </div>
            <button type='submit' className='btn btn-primary'>Añadir</button>
        </form>


        <h3>Create Degreso</h3>
        <form onSubmit={storeDegreso}>
            <div className='mb-3'>
                <label className='form-label'>Description</label>
                <input 
                    value={descripcionDegreso}
                    onChange={ (e) => setDescripcionDegreso(e.target.value)}
                    type="text"
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Cantidad</label>
                <input 
                    value={cantidadDegreso}
                    onChange={ (e) => setCantidadDegreso(e.target.value)}
                    type="number"
                    className='form-control'
                />
            </div>
            <button type='submit' className='btn btn-primary'>Añadir</button>
        </form>
    </div>



  )
}

export default CreateProduct

























// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';



// const endPointIngreso = 'http://localhost:8000/api/ingreso';
// const endpointDegreso = 'http://localhost:8000/api/degreso';


// const CreateOperacion = () => {

//   const [cantidadIngreso, setCantidadIngreso] = useState(0);
//   const [descripcionInreso, setDescripcionIngreso] = useState('');

//   const [cantidadDegreso, setCantidadDegreso] = useState(0);
//   const [descripcionDegreso, setDescripcionDegreso] = useState('');

//   const navigate = useNavigate();


//   const storeIngreso = async (event) => {

//     event.peventDefault();

//     console.log("entraaaa!!!");

  
//     await axios.post(endPointIngreso, {
//       descripcion: descripcionInreso,
//       cantidad: cantidadIngreso
//     });

//     navigate('/');

//   }

//   const storeDegreso = async (event) => {

//     console.log("entraaaa2!!!");

//     event.peventDefault();
//     await axios.post(endpointDegreso, {
//       cantidad: cantidadDegreso, 
//       descripcion: descripcionDegreso
//     });

//     navigate('/');

//   }



//   return (
//     <>
    
//       <h3>Crear Ingreso</h3>

//       <form onSubmit={storeIngreso}>

//         <div className='mb-3'>
//           <label className='form-label'>Descripcion</label>
//           <input
//            value={descripcionInreso}
//            onChange = {(e) => setDescripcionIngreso(e.target.value)}
//            type="text"
//            className='form-control'
//            />

//           <label className='form-label'>Cantidad</label>
//           <input
//            value={cantidadIngreso}
//            onChange = {(e) => setCantidadIngreso(e.target.value)}
//            type="number"
//            className='form-control'
//            />

//         </div>

//         <button type='submit' className='btn btn-primary'>Realizar Ingreso</button>

//       </form>

//       <h3>Crear Degreso</h3>

//       <form onSubmit={storeDegreso}>

//         <div className='mb-3'>
//           <label className='form-label'>Descripcion</label>
//           <input
//           value={descripcionDegreso}
//           onChange = {(e) => setDescripcionDegreso(e.target.value)}
//           type="text"
//           className='form-control'
//           />

//           <label className='form-label'>Cantidad</label>
//           <input
//           value={cantidadDegreso}
//           onChange = {(e) => setCantidadDegreso(e.target.value)}
//           type="number"
//           className='form-control'
//           />

//         </div>

//         <button type='submit' className='btn btn-primary'>Realizar Degreso</button>

//       </form>



    
//     </>
//   )
// }

// export default CreateOperacion
