import React from 'react'
import logo_clinica from '../Imagenes/logo_clinica.png'
import nombre_clinica from '../Imagenes/nombre_clinica.png'
import icono_pse from '../Imagenes/icono-pse.png'
import icono_rbm from '../Imagenes/icono-rbm.png'
import { Inicio } from './Inicio'
import '../pagos.css'
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


export const Pagos = () => {

  const navigate = useNavigate();
  const location = {
    pathname: '/Login'
  }
  const handleNext = (e) => { navigate('/Login') }
  const handlesi = (e) => { navigate('/Registrar') }
  const handafilia = (e) => { navigate('/Afiliacion') }
  const handinicio = (e) => { navigate('/Logueado') }
  const handOrdenes = (e) => { navigate('/Ordenes') }
  const handPagos = (e) => { navigate('/Pagos') }
  const handLaboratorio = (e) => { navigate('/Laboratorio') }
  const handCitas_medicas = (e) => { navigate('/Citas_medicas') }


  return (
    <body>
      <header className='usuario'>
        <text>Bienvenido(a) DIEGO ALEJANDRO OSORIO HERNANDEZ</text>
      </header>
      <header>
        <div className='encabezado'>
          <img className='logo' src={logo_clinica} alt='logo clinica' onClick={handinicio}/>
          <img className='nombre' src={nombre_clinica} alt='nombre clinica' onClick={handinicio}/>
        </div>
        <div className='botones'>
          <div className='ofi'><text className='oficina'>Oficina Virtual</text></div>
          <text className='oficina1'>Linea Bogotá 4700000 Nacional 01800789456</text>
        </div>
      </header>
      <nav>
        <ul className='navegacion'>
          <li><a href={Inicio} onClick={handinicio}>Inicio</a></li>
          <li><a href={Inicio} onClick={handPagos}>Red de Atención</a></li>
          <li><a href={Inicio} onClick={handafilia}>Afiliados</a></li>
          <li><a href={Inicio} onClick={handPagos}>Contactanos</a></li>
        </ul>
      </nav>
      <div className='servicios'>
        <text>Inicio /  Servicios en atención de salud  / Pagos</text>
      </div>
      <div className='titulo'>
        <text>Pagos</text>
      </div>
      <div className='afiliado'>
        <text>DIEGO ALEJANDRO OSORIO HERNANDEZ - CC1003456789</text><br></br>
      </div>
      <div className='cuadro'>
        <header className='cita'>
          <text>Cita médica - Medicina Interna</text>
        </header>
        <div className='texto1'>
          <div>
            <text>Modalidad</text><br></br>
            <text></text><br></br>
            <text>Servicio</text><br></br>
            <text></text><br></br>
            <text>Lugar</text><br></br>
            <text></text><br></br>
            <text>Fecha</text><br></br>
            <text></text><br></br>
            <text>Valor</text><br></br>
          </div>
          <div>
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
        <img src={icono_pse} alt='icono_pse' /><br></br>
        <text>Débito bancario PSE</text>
      </div>
      <div className='rbm'>
        <img src={icono_rbm} alt='icono_rbm' /><br></br>
        <text>Para pagos con tarjeta</text><br></br>
        <text>Multiservicios y Tarjeta</text><br></br>
        <text>de crédito (Mastercard)</text>
      </div>
      <footer>
        <div className='fin'>
          <div className='clinica'>
            <img className='logo1' src={logo_clinica} alt='logo clinica' />
            <img className='nombre1' src={nombre_clinica} alt='nombre clinica' />
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
