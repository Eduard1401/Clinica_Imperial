import React from 'react'
import logo_clinica from '../Imagenes/logo_clinica.png'
import nombre_clinica from '../Imagenes/nombre_clinica.png'
import Fonendoscopio from '../Imagenes/Fonendoscopio.png'
import odontologia from '../Imagenes/odonto.png'
import laboratorio from '../Imagenes/laboratorio-citas.png'
import optometria from '../Imagenes/optometria.png'
import '../Citas_medicas.css'
import { Inicio } from './Inicio'


export const Citas_medicas = () => {
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
      <div className='servicios2'>
        <text>Inicio /  Servicios en atención de salud  / Citas Médicas</text>
      </div>
      <div className='titulo'>
        <text>Citas médicas</text>
      </div>
      <div className='afiliado'>
        <text>Seleccione una opción</text>
      </div>
      <center>
        <div className='cuadro1'>
          <center>
          <div className='imgcuadro1'>
            <img className='logo' src={logo_clinica} alt='logo clinica'/>
            <img className='nombre' src={nombre_clinica} alt='nombre clinica'/>
          </div>
          </center>
          <div className='nombrecontributivo'>
            <text>REGIMEN CONTRIBUTIVO</text>
          </div>
          <div className='medicina'>
            <button>
              <img src={Fonendoscopio} alt='Fonendoscopio'/>
              <div>
              <text></text><br></br>
              <text>MEDICINA</text>
              </div>
            </button>
          </div>
          <div className='odontologia'>
            <button>         
              <img src={odontologia} alt='odontologia'/>
              <div>
                <text></text><br></br>
                <text>ODONTOLOGIA</text>
              </div>
            </button>
          </div>
          <div className='laboratorio'>
            <button>         
              <img src={laboratorio} alt='laboratorio'/>
              <div>
                <text></text><br></br>
                <text>LABORATORIO</text>
              </div>
            </button>
          </div>
          <div className='optometria'>
            <button>         
              <img src={optometria} alt='optometria'/>
              <div>
                <text></text><br></br>
                <text>OPTOMETRIA</text>
              </div>
            </button>
          </div>
        </div>
      </center>

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
