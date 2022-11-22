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


export const Laboratorio = () => {
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
        <text>Consulta de Afiliación</text>
      </div>
      <div className='afiliado'>
        <text>DIEGO ALEJANDRO OSORIO HERNANDEZ - CC1003456789</text>
      </div>

      <div className='seleccion'>
        <text>Seleccione el año y mes de la toma del laboratorio que deseas consultar</text>
      </div>
      <div className='selectorfecha'>
        <input type="month" name="fecha" id="fecha" class="form-control"/>
        <button className="botonbuscar">         
            BUSCAR 
          </button>
      </div>
      <div className='cuadro2'>
        <h4>LABORATORIO CLINICO</h4>
         <div className='textocuadro'>
          <text>Numero:</text> <br></br> 
          <text></text> <br></br>         
          <text>Fecha:</text>
         </div>
        <div className='textocuadro2' >
          <text>122555</text> <br></br> 
          <text></text> <br></br>         
          <text> sabado 3 de octubre</text>
        <div>

        </div>
          <button className="Descargar">         
             DESCARGAR
          </button>
          <button className="Enviar">         
             ENVIAR
          </button>
        </div>
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
