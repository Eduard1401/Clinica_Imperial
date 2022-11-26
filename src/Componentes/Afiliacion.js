import React from 'react'
import logo_clinica from '../Imagenes/logo_clinica.png'
import nombre_clinica from '../Imagenes/nombre_clinica.png'
import { Inicio } from './Inicio'
import '../Afiliacion.css'


export const Afiliacion = () => {
  return (
    <body>
      <header className='usuario'>
        <text>Bienvenido(a) DIEGO ALEJANDRO OSORIO HERNANDEZ</text>
      </header>
      <header>
        <div className='encabezado'>
            <img className='logo' src={logo_clinica} alt='logo clinica'/>
            <img className='nombre' src={nombre_clinica} alt='nombre clinica'/>
        </div>
        <div className='botones'>
          <div className='ofi'><text className='oficina'>Oficina Virtual</text></div>
          <text className='oficina1'>Linea Bogotá 4700000 Nacional 01800789456</text>
        </div>
      </header>
      <nav>
        <ul className='navegacion'>
          <li><a href={Inicio}>Inicio</a></li>
          <li><a href={Inicio}>Red de Atención</a></li>
          <li><a href={Inicio}>Afiliados</a></li>
          <li><a href={Inicio}>Contactanos</a></li>
        </ul>   
      </nav>
      <div className='servicios'>
        <text>Inicio /  Servicios en atención de salud  / Consulta Afiliación</text>
      </div>
      <div className='titulo'>
        <text>Consulta de Afiliación</text>
      </div>
      <div className='afiliado'>
        <text>DIEGO ALEJANDRO OSORIO HERNANDEZ - CC1003456789</text><br></br>
      </div>
      <div className='numero'>
        <text>Afiliación 8456420 - EXPEDIDO</text>
      </div>
      <div className='empleador'>
        <text>Empleadores</text>
      </div>
      <div className='empleador1'>
        <text>Para ampliar la información de su afiliación, oprima la opción "Detalles".</text>
      </div>
      <div className='empleador2'>
        <text>Identificación del<br></br>empleador</text>
        <text>Nombre del empleador</text>
        <text>Tipo de Trabajador</text>
      </div>
      <div className='empleador3'>
        <text>_________________________________________________________________________________________________________________________</text>
      </div>
      <div className='empleador4'>
        <text>NIT 34568765</text>
        <text>Universidad Cooperativa<br></br> de Colombia</text>
        <text>Dependiente</text>
      </div>
      <div className='detalles'>
        <button>Detalles</button>
      </div>
      <footer>
        <div className='fin'>
          <div className='clinica'>
            <img className='logo1' src={logo_clinica} alt='logo clinica'/>
            <img className='nombre1' src={nombre_clinica} alt='nombre clinica'/>
          </div>
          <div><text className='oficina2'>Oficina Virtual</text></div>
          <div>
            <text>Preguntas Frecuentes</text><br></br>
            <text></text><br></br>
            <text>Contáctanos:</text><br></br>
            <text>Clinica Imperial Integral</text><br></br>
            <text></text><br></br>
            <text>Bogotá     4700000</text><br></br>
            <text>Linea Nacional  018000789456</text><br></br>
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
