import React from 'react'
import logo_clinica from '../Imagenes/logo_clinica.png'
import nombre_clinica from '../Imagenes/nombre_clinica.png'
import Fonendoscopio from '../Imagenes/Fonendoscopio.png'
import odontologia from '../Imagenes/odonto.png'
import laboratorio from '../Imagenes/laboratorio-citas.png'
import optometria from '../Imagenes/optometria.png'
import ordenes from '../Imagenes/ordenes.png'
import citas from '../Imagenes/citas.png'
import historia from '../Imagenes/historia.png'

import pagos from '../Imagenes/pagos.png'
import afiliaciones from '../Imagenes/afiliaciones.png'
import { Inicio } from './Inicio'


export const Citas_medicas = () => {
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
        <text>Citas medicas</text>
      </div>
      <div className='afiliado'>
        <text>Seleccione una opción</text>
      </div>
      <div className='cuadro1'>
        <div className='imgcuadro1'>
          <img src={logo_clinica} alt='logo clinica' width="60px"/>
          <img src={nombre_clinica} alt='nombre clinica' width="140px" height="55px" />
        </div>
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
