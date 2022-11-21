import React from 'react'
import logo_clinica from '../Imagenes/logo_clinica.png'
import nombre_clinica from '../Imagenes/nombre_clinica.png'
import icono_pse from '../Imagenes/icono-pse.png'
import icono_rbm from '../Imagenes/icono-rbm.png'
import { Inicio } from './Inicio'


export const Pagos = () => {
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
        <text>Pagos</text>
      </div>
      <div className='afiliado'>
        <text>DIEGO ALEJANDRO OSORIO HERNANDEZ - CC1003456789</text><br></br>
      </div>
      <div className='cuadro'>
        <div className='texto1'>
            <div>
                <text>Cita médica - Medicina Interna</text><br></br>
                <text></text><br></br>
                <text>Modalidad</text><br></br>
                <text></text><br></br>
                <text>Servicio</text><br></br>
                <text></text><br></br>
                <text></text><br></br>
                <text>Lugar</text><br></br>
                <text></text><br></br>
                <text>Fecha</text><br></br>
                <text></text><br></br>
                <text>Valor</text><br></br>
            </div>
            <div>
                <text></text><br></br>
                <text></text><br></br>
                <text></text><br></br>
                <text>Presencial</text><br></br>
                <text></text><br></br>
                <text>Consulta de primera vez por especialista en medicina interna</text><br></br>
                <text></text><br></br>
                <text>CM Av. 39</text><br></br>
                <text></text><br></br>
                <text>Viernes, 25 denoviembre de 2022 6:00 PM</text><br></br>
                <text></text><br></br>
                <text>$ 3.700</text><br></br>
            </div>
        </div>
      </div>
      <div className='titulo1'>
        <text>Medios de pago</text>
      </div>
      <div className='pse'>   
          <img src={icono_pse} alt='icono_pse' width="120px"/><br></br>
          <text>Débito bancario PSE</text>
      </div>
      <div className='rbm'>   
          <img src={icono_rbm} alt='icono_rbm' width="200px"/><br></br>
          <text>Para pagos con tarjeta</text><br></br>
          <text>Multiservicios y Tarjeta</text><br></br>
          <text>de crédito (Mastercard)</text>
      </div>
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
