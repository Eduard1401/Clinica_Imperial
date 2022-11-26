
//import './App.css';
//import './logueado.css';
//import './login.css';
import { Inicio } from './Componentes/Inicio';
import { Olvidar } from './Componentes/Olvidar';
import { Login } from './Componentes/login';
import { Logueado } from './Componentes/Logueado';
import { Registrate } from './Componentes/Registrate';
import { Afiliacion } from './Componentes/Afiliacion';
import { Ordenes } from './Componentes/ordenes';
import { Pagos } from './Componentes/pagos';
import { Citas_medicas } from './Componentes/Citas_medicas';
import { Laboratorio } from './Componentes/Laboratorio';

import {BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    
    <Router>          
          <Routes>
            <Route path="/" element={<Inicio />}/>
            <Route path="/Login" element={<Login />}/>
            <Route path="/Olvidar" element={<Olvidar />}/>
            <Route path="/Logueado" element={<Logueado />}/>
            <Route path="/Registrate" element={<Registrate />}/>
            <Route path="/Afiliacion" element={<Afiliacion />}/>
            <Route path="/Ordenes" element={<Ordenes />}/>
            <Route path="/Pagos" element={<Pagos />}/>
            <Route path="/Laboratorio" element={<Laboratorio />}/>
            <Route path="/Citas_medicas" element={<Citas_medicas />}/>
          </Routes>
        </Router>



  );
}

export default App;
