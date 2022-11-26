import React from 'react'
import logo_clinica from '../Imagenes/logo_clinica.png'
import nombre_clinica from '../Imagenes/nombre_clinica.png'
import '../Laboratorio.css'
import { Inicio } from './Inicio'


export const Laboratorio = () => {
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
      <div className='servicios1'>
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
        </center>
      </div>
      <div className='cuadro2'>
        <header className='clinico1'>
          <text className='clinico'>LABORATORIO CLINICO</text>
        </header>
        <div className='cuadro3'>
          <div className='texto1'>
            <text>Numero: 456</text> <br></br> 
            <text></text> <br></br>         
            <text>Fecha:15/11/2022</text>
          </div>
          <div className='botoncito'>
            <button>DESCARGAR</button>
            <button>ENVIAR</button>
          </div>
        </div>
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
