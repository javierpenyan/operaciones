import React, { useState } from "react";
import { useEffect } from "react";

import axios from "axios";

import { Link } from "react-router-dom";

const endPonint = "http://localhost:8000/api";

export const ShowAll = () => {
  //aqui declaro mis hooks

  const [ingresos, setIngresos] = useState([]);

  const [degresos, setDegresos] = useState([]);

  const [isLoadDegresos, setIsLoadDegresos] = useState(false);

  const [isLoadIngresos, setIsLoadIngresos] = useState(false);

  const [cargaTotalI, setCargaTotalI] = useState(false);

  const [cargaTotalD, setCargaTotalD] = useState(false);

  const [tot, setTot] = useState({
    totalIngresos: 0,
    totalDegresos: 0,
  });

  const { total, totalIngresos, totalDegresos } = tot;

  // const [totalIngresos, setTotalIngresos] = useState(0);

  useEffect(() => {
    getAllIngresos();
    getAllDegresos();
    // calculoTotal();
  }, []);

  useEffect(() => {
    calculoTotalDegresos();
  }, [isLoadDegresos]);

  useEffect(() => {
    calculoTotalIngresos();
  }, [isLoadIngresos]);

  // useEffect(()=>{
  //   calculoTotalCuenta()
  // }, [cargaTotalI]);

  // useEffect( () => {

  //     calculoTotalIngresos();
  //     calculoTotalDegresos();
  // },[]);

  //aqui ejecuto mis funciones del componente

  const getAllIngresos = async () => {
    const respuestaIngresos = await axios.get(`${endPonint}/ingresos`);
    setIngresos(respuestaIngresos.data); //IMPORTANTE EL .data QUE SI NO NO LE METEMOS LOS DATOS!!!!!!
    setIsLoadIngresos(true);
  };

  const getAllDegresos = async () => {
    const respuestaDegresos = await axios.get(`${endPonint}/degresos`);
    setDegresos(respuestaDegresos.data); //IMPORTANTE EL .data QUE SI NO NO LE METEMOS LOS DATOS!!!!!!
    setIsLoadDegresos(true);
    // console.log("respuesta degresos ->", respuestaDegresos.data);
  };

  const deleteIngreso = async (id) => {
    //para borrar un producto necesitamos pasarle el id del producto

    await axios.delete(`${endPonint}/ingreso/${id}`);
    getAllIngresos();
  };

  const deleteDegreso = async (id) => {
    await axios.delete(`${endPonint}/degreso/${id}`);
    getAllDegresos();
  };

  //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  // const calculoTotalIngresos = () => {

  //   /*ingresos.map((ing) =>
  //     setTot({
  //       ...tot,
  //       totalIngresos: totalIngresos + parseInt(ing.cantidad),
  //     })
  //   );*/
  // }; //con map no se puede

  const calculoTotalIngresos = () => {
    let totali = 0;

    ingresos.forEach((el) => (totali += el.cantidad));
    console.log("totalI-->", totali);

    setTot({ ...tot, totalIngresos: totali });

    setIsLoadIngresos(false);

    //abajo esta hecho con el reducer e manera difernte a abajo (en este caso con varias lineas)

    // let total = ingresos.reduce((acc, el) => (
    //   acc+parseInt(el.cantidad)
    // ), 0);

    // setTot({ ...tot, totalIngresos: total})
  };

  const calculoTotalDegresos = () => {
    // console.log("Es este el sitio!!!! degresos-=-=>", degresos.cantidad);
    // debugger;
    let total = degresos.reduce((acc, el) => acc + parseInt(el.cantidad), 0); //otra forma de hacerlo seria con reducer,
    //donde el ac es el acumulado, el es el elemento que itera, luego realizamos la accion. El 0 es la cantidad inicial del ac

    let total2 = 0;
    degresos.forEach((el) => (total2 += el.cantidad));
    setTot({ ...tot, totalDegresos: total2 });

    setIsLoadDegresos(false);
  };

  // const calculoTotalCuenta = () =>{
  //   let total = totalIngresos - totalDegresos;

  //   setTot({ ...tot, total: total})
  // }

  //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

  // console.log("totalingresos-->", totalIngresos);
  // console.log("totaldegresos-->", totalDegresos);

  // const totalIng = calculoTotalIngresos();
  // const totalDeg = calculoTotalDegresos();

  // total(totalIngresos - totalDegresos);

  //   const calculoTotal = () =>{

  //     console.log("ingresos--->", ingresos);
  //     console.log("degresos--->", degresos);

  //   }

  // console.log("ingresos==>", ingresos);
  // console.log("degresos==>", degresos);

  return (
    <>
      <div className="d-grid gap-2">
        <Link
          to={"/crearOperacion"}
          className="btn btn-succes btn-lg mt-2 text-white"
        >
          Crear Operación
        </Link>
      </div>

      {/* tabla de ingresos */}

      <table className="table table-striped">
        <thead className="bg-primary text-white">
          <tr>
            <th>Description</th>
            <th>Cantidad</th>
            <th>Acciones</th>
            <th>Ver ingresos aislados</th>
          </tr>
        </thead>

        <tbody>
          {ingresos.map((ingreso) => (
            <tr key={ingreso.id}>
              <td>{ingreso.descripcion}</td>
              <td>{ingreso.cantidad}</td>
              <td>
                <Link
                  to={`/editIngreso/${ingreso.id}`}
                  className="btn btn-warning"
                >
                  Editar
                </Link>
                <button
                  onClick={() => deleteIngreso(ingreso.id)}
                  className="btn btn-danger"
                >
                  Borrar
                </button>
              </td>
              <td>
                <Link to={`/mostrarIngresos`} className="btn btn-warning">
                  Mostrar Ingresos
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <table className="table table-striped">
        <thead className="bg-primary text-white">
          <tr>
            <th>Description</th>
            <th>Cantidad</th>
            <th>Acciones</th>
            <th>Ver degresos aislados</th>
          </tr>
        </thead>

        <tbody>
          {degresos.map((degreso) => (
            <tr key={degreso.id}>
              <td>{degreso.descripcion}</td>
              <td>{degreso.cantidad}</td>
              <td>
                <Link
                  to={`/editDegreso/${degreso.id}`}
                  className="btn btn-warning"
                >
                  Editar
                </Link>
                <button
                  onClick={() => deleteDegreso(degreso.id)}
                  className="btn btn-danger"
                >
                  Borrar
                </button>
              </td>

              <td>
                <Link to={`/mostrarDegresos`} className="btn btn-warning">
                  Mostrar Degresos
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Ha habido unos ingresos totales de: {totalIngresos} </h2>
      <h2>Ha habido unos gastos totales de: {totalDegresos} </h2>
      <h2>Tiene un total de: {totalIngresos - totalDegresos} Euros </h2>
    </>
  );
};

//createIngreso
//createDegreso
//editIngreso
//EditDegreso
//CrearOperacion
