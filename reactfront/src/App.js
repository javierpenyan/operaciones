import logo from './logo.svg';
import './App.css';
import { ShowAll } from './components/ShowAll';
import { ShowIngresos } from './components/ShowIngresos';
import {ShowDegresos} from './components/ShowDegresos';
import CreateOperacion from './components/CreateOperacion';
import { EditIngreso } from './components/EditIngreso';
import { EditDegreso } from './components/EditDegreso';



import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import { BarraNavegacion } from './components/BarraNavegacion';
// import { UseProvider } from './components/context/UseProvider';
// import { BarraNavegacion } from './components/BarraNavegacion';








function App() {
  return (
    <div className="App">
      {/* <UseProvider> */}
      <BrowserRouter>
      <BarraNavegacion/>
        <Routes>
          <Route path='/' element={<ShowAll/>}/>
          <Route path='/crearOperacion' element={<CreateOperacion/>}/>
          <Route path='/mostrarIngresos' element={<ShowIngresos/>}/>
          <Route path='/mostrarDegresos' element={<ShowDegresos/>}/>
          <Route path='/editIngreso/:id' element={<EditIngreso/>}/>
          <Route path='/editDegreso/:id' element={<EditDegreso/>}/>
          <Route path="/*" element={ <Navigate to="/" /> } />
        </Routes>
      </BrowserRouter>
      {/* </UseProvider> */}
    </div>
  );
}

export default App;


//falta crear, editar, el menú, mostrar resultados totales, quizás hacer algo con el ls o ss y mejorar el formato y limitaciones numeros negativos
//tambien el logueo, y subir foto