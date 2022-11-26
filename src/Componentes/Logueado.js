import React from 'react'
import logo_clinica from '../Imagenes/logo_clinica.png'
import nombre_clinica from '../Imagenes/nombre_clinica.png'
import medicos from '../Imagenes/medicos1.PNG'
import ordenes from '../Imagenes/ordenes.png'
import citas from '../Imagenes/citas.png'
import historia from '../Imagenes/historia.png'
import laboratorio from '../Imagenes/laboratorio.png'
import pagos from '../Imagenes/pagos.png'
import afiliaciones from '../Imagenes/afiliaciones.png'
import { Inicio } from './Inicio'
import '../logueado.css'


export const Logueado = () => {
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
          <div className='ofi1'><text className='oficina1'>Linea Bogotá 4700000 Nacional 01800789456</text></div>
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
      <article className='imagen'>
        <img src={medicos} alt='' />
      </article>
      <nav className='barra'></nav>
      <div className='servicios'>
        <text>Servicios Destacados</text>
      </div>
      <div className='especialidad'>
        <button>
          <div>
            <img src={ordenes} alt='' />
          </div>
          <div>
            <text>Órdenes médicas</text>
          </div>
        </button>
        <button>
          <div>
            <img src={citas} alt='' />
          </div>
          <div>
            <text>Citas</text>
          </div>
        </button>
        <button>
          <div>
            <img src={pagos} alt='' />
          </div>
          <div>
            <text><center>Pagos</center></text>
          </div>
        </button>
      </div>
      <div className='especialidad1'>
        <button>
          <div>
            <img src={historia} alt='' />
          </div>
          Historia Clínica
        </button>
        <button>
          <div>
            <img src={laboratorio} alt='' />
          </div>
          Laboratorio
        </button>
        <button>
          <div>
            <img src={afiliaciones} alt='' />
          </div>
          Afiliación
        </button>
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
