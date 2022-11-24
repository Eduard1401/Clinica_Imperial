import React from 'react'
import logo_clinica from '../Imagenes/logo_clinica.png'
import nombre_clinica from '../Imagenes/nombre_clinica.png'
import Fonendoscopio from '../Imagenes/Fonendoscopio.png'
import odontologia from '../Imagenes/odonto.png'
import laboratorio from '../Imagenes/laboratorio-citas.png'
import optometria from '../Imagenes/optometria.png'
import '../Citas_medicas.css'
import ordenes from '../Imagenes/ordenes.png'
import citas from '../Imagenes/citas.png'
import historia from '../Imagenes/historia.png'

import pagos from '../Imagenes/pagos.png'
import afiliaciones from '../Imagenes/afiliaciones.png'
import { Inicio } from './Inicio'
import { useNavigate } from 'react-router-dom';
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";




export const Citas_medicas = () => {

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
        <text>Inicio /  Servicios en atención de salud  / Consulta Afiliación</text>
      </div>
      <div className='titulo'>
        <text>Citas medicas</text>
      </div>
      <div className='afiliado'>
        <text>Seleccione una opción</text>
      </div>
      <center>
        <div className='cuadro1'>
          <center>
          <div className='imgcuadro1'>
            <img src={logo_clinica} alt='logo clinica' width="60px"/>
            <img src={nombre_clinica} alt='nombre clinica' width="140px" height="55px" />
          </div>
          </center>
          <div className='nombrecontributivo'>
            <text>REGIMEN CONTRIBUTIVO</text>
          </div>
          <div >
            <button className="boton1">
            <img src={Fonendoscopio} alt='Fonendoscopio' width="60px"/>
            <div className="Fonendoscopio">
              MEDICINA
            </div>
          </button>

          </div>
          <div >
            <button className="boton2">         
            <img src={odontologia} alt='odontologia' width="60px"/>
            <div className="odontoligia">
             ODONTOLGIA
            </div>
            </button>
          </div>
          <div >
            <button className="boton3">         
            <img src={laboratorio} alt='odontologia' width="50px"/>
            <div className="laboratorio">
             LABORATORIO
            </div>
            </button>
          </div>
          <div >
            <button className="boton4">         
              <img src={optometria} alt='odontologia' width="50px"/>
              <div className="optometria">
              OPTOMETRIA
              </div>
            </button>
          </div>
        </div>
      </center>

      <footer>
        <div className='fin'>
          <div className='imgcuadro'>
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
