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
import '../Inicio.css';
import { useNavigate } from 'react-router-dom';
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



export const Inicio = () => {
  const navigate = useNavigate();
  const location = {
    pathname: '/Login'
}
const handleNext = (e) => {navigate('/Login')}
const handlesi = (e) => {navigate('/Registrar')}
const handinicio = (e) => {navigate('/')}

  return (
    <body>
      <header>
        <div className='encabezado'>
            <img src={logo_clinica} alt='logo clinica' width="60px"/>
            <img src={nombre_clinica} alt='nombre clinica' width="140px" height="55px" />
        </div>
        <div className='botones'>
          <button onClick={handleNext}>Oficina virtual afiliados</button>
          <button  onClick={handlesi}>Registrate afiliado</button>
        </div>
      </header>
      <nav>
        <ul className='navegacion'>
          <li><a href={Inicio} onClick={handinicio}>Inicio</a></li>
          <li><a href={Inicio} onClick={handleNext}>Red de Atención</a></li>
          <li><a href={Inicio} onClick={handleNext}>Afiliados</a></li>
          <li><a href={Inicio} onClick={handlesi}>Contactanos</a></li>
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
            <img src={ordenes} alt='' onClick={handleNext} />
          </div>
          Órdenes médicas
        </button>
        <button>
          <div>
            <img src={citas} alt='' onClick={handleNext}/>
          </div>
          Citas
        </button>
        <button>
          <div>
            <img src={pagos} alt='' onClick={handleNext}/>
          </div>
          Pagos
        </button>
      </div>
      <div className='especialidad1'>
        <button>
          <div>
            <img src={historia} alt='' onClick={handleNext}/>
          </div>
          Historia Clínica
        </button>
        <button>
          <div>
            <img src={laboratorio} alt='' onClick={handleNext} />
          </div>
          Laboratorio
        </button>
        <button>
          <div>
            <img src={afiliaciones} alt='' onClick={handleNext}/>
          </div>
          Afiliación
        </button>
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