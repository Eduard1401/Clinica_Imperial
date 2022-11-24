import React from 'react'
import logo_clinica from '../Imagenes/logo_clinica.png'
import nombre_clinica from '../Imagenes/nombre_clinica.png'
import '../Laboratorio.css'
import { Inicio } from './Inicio'

import { useNavigate } from 'react-router-dom';
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export const Laboratorio = () => {

  const navigate = useNavigate();
  const location = {
    pathname: '/Login'
}
const handleNext = (e) => {navigate('/Login')}
const handlesi = (e) => {navigate('/Registrar')}
const handafilia = (e) => {navigate('/Afiliacion')}
const handinicio = (e) => {navigate('/Logueado')}
const handOrdenes = (e) => {navigate('/Ordenes')}
const handPagos = (e) => {navigate('/Pagos')}
const handLaboratorio = (e) => {navigate('/Laboratorio')}
const handCitas_medicas = (e) => {navigate('/Citas_medicas')}

  return (
    <body>
      <header className='usuario'>
        <text>Bienvenido(a) DIEGO ALEJANDRO OSORIO HERNANDEZ</text>
      </header>
      <header>
        <div className='encabezado'>
            <img src={logo_clinica} alt='logo clinica' width="60px"/>
            <img src={nombre_clinica} alt='nombre clinica' width="140px" height="55px" />
        </div>
        <div className='botones'>
          <div><text className='oficina'>Oficina Virtual</text></div>
          <text className='oficina1'>Linea Bogotá 4700000 Nacional 01800789456</text>
        </div>
      </header>
      <nav>
        <ul className='navegacion'>
          <li><a href={Inicio} onClick={handinicio}>Inicio</a></li>
          <li><a href={Inicio} onClick={handinicio}>Red de Atención</a></li>
          <li><a href={Inicio} onClick={handafilia}>Afiliados</a></li>
          <li><a href={Inicio} onClick={handinicio}>Contactanos</a></li>
        </ul>   
      </nav>
      <div className='servicios'>
        <text>Inicio /  Servicios en atención de salud  / Laboratorio</text>
      </div>
      <div className='titulo'>
        <text>Laboratorio</text>
      </div>
      <div className='afiliado'>
        <text>DIEGO ALEJANDRO OSORIO HERNANDEZ - CC1003456789</text>
      </div>

      <div className='seleccion'>
        <text>Seleccione el año y mes de la toma del laboratorio que deseas consultar</text>
      </div>
      <div className='selectorfecha'>
        <center>
        <input type="month" name="fecha" id="fecha" class="form-control"/>
        <button>         
            BUSCAR 
          </button>
        </center>
      </div>
      <center>
        <div className='cuadro2'>
          <h4>LABORATORIO CLINICO</h4>
            <div className='textocuadro'>
              <text>Numero: 456</text> <br></br> 
              <text></text> <br></br>         
              <text>Fecha:15/11/2022</text>
            </div>
          
          <button className="Descargar">         
             DESCARGAR
          </button>
          <button className="Enviar">         
             ENVIAR
          </button>
        
        </div>
      </center>
      <footer>
        <div className='fin'>
          <div>
            <img src={logo_clinica} alt='logo clinica' width="60px"/>
            <img src={nombre_clinica} alt='nombre clinica' width="140px" height="55px" />
          </div>
          <div><text className='oficina2'>Oficina Virtual</text></div>
          <div>
            Preguntas Frecuentes
            <br></br>Contáctanos<br></br>
            Clinica Imperial Integral<br></br>
            Bogotá     4700000<br></br>
            Nacional  018000789456
          </div>
        </div>
        <div className='pie'>
          <div>@Copyright 2022 Clinica Imperial  Integral - Derechos reservados.</div>
          <div>Cualquier uso de este sitio constituye su aceptación y conformidad de los Términos y condiciones y Politica de privacidad.</div>
        </div>
      </footer>
    </body>
  )
}
