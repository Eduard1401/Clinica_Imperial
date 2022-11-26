import React from 'react'
import logo_clinica from '../Imagenes/logo_clinica.png'
import nombre_clinica from '../Imagenes/nombre_clinica.png'
import { Inicio } from './Inicio'
import '../ordenes.css'


export const Ordenes = () => {
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
        <text>Inicio /  Servicios en atención de salud  / Órdenes Médicas</text>
      </div>
      <div className='titulo'>
        <text>Órdenes Médicas</text>
      </div>
      <div className='afiliado'>
        <text>DIEGO ALEJANDRO OSORIO HERNANDEZ - CC1003456789</text><br></br>
      </div>
      <div className='cuadro'>
        <div className='texto1'>
            <div className='texto2'>
                <div>
                    <text>Orden médica - Optometría</text><br></br>
                    <text></text><br></br>
                    <text>Servicio</text><br></br>
                    <text></text><br></br>
                    <text>N° de la orden</text><br></br>
                    <text>Fecha de la orden</text><br></br>
                </div>
                <div>
                    <text></text><br></br>
                    <text></text><br></br>
                    <text>Consulta de primera vez por <br></br> Optometría</text><br></br>
                    <text>0033796847</text><br></br>
                    <text>Lunes, 14 de marzo de 2022</text><br></br>
                </div>
            </div>
            <div className='detalles'>
                <button>Agendar</button>
            </div>
        </div>
      </div>
      <div className='cuadro1'>
      <div className='texto1'>
            <div className='texto2'>
                <div>
                    <text>Orden médica - Odontología</text><br></br>
                    <text></text><br></br>
                    <text>Servicio</text><br></br>
                    <text></text><br></br>
                    <text>N° de la orden</text><br></br>
                    <text>Fecha de la orden</text><br></br>
                </div>
                <div>
                    <text></text><br></br>
                    <text></text><br></br>
                    <text>Consulta de primera vez por <br></br> Odontología</text><br></br>
                    <text>005376758</text><br></br>
                    <text>Martes, 07 de junio de 2022</text><br></br>
                </div>
            </div>
            <div className='detalles'>
                <button>Agendar</button>
            </div>
      </div>
      </div>
      <div className='cuadro2'>
      <div className='texto1'>
            <div className='texto2'>
                <div>
                    <text>Orden médica - Medicina general</text><br></br>
                    <text></text><br></br>
                    <text>Servicio</text><br></br>
                    <text></text><br></br>
                    <text>N° de la orden</text><br></br>
                    <text>Fecha de la orden</text><br></br>
                </div>
                <div>
                    <text></text><br></br>
                    <text></text><br></br>
                    <text>Consulta de primera vez por <br></br> Medicina general</text><br></br>
                    <text>0078811236</text><br></br>
                    <text>Viernes, 04 de octubre de 2022</text><br></br>
                </div>
            </div>
            <div className='detalles'>
                <button>Agendar</button>
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
