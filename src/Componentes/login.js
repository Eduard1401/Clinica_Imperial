import React from 'react'
import logo_clinica from '../Imagenes/logo_clinica.png'
import nombre_clinica from '../Imagenes/nombre_clinica.png'
import captcha from '../Imagenes/captcha.png'
import '../login.css'
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export const Login = () => {

  const navigate = useNavigate();
  const location = {
    pathname: '/Login'
  }
  const handleNext = (e) => { navigate('/Logueado') }
  const handlesi = (e) => { navigate('/Olvidar') }
  const handiregis = (e) => { navigate('/Registrate') }
  const handiregres = (e) => { navigate('/') }


  return (
    <body>
      <header>
        <div className='encabezado'>
          <img className='logo' src={logo_clinica} alt='logo clinica' onClick={handiregres}/>
          <img className='nombre' src={nombre_clinica} alt='nombre clinica' onClick={handiregres}/>
        </div>
      </header>
      <center>
        <div className='cuadro'>
          <header>
            <text>OFICINA VIRTUAL</text>
          </header>
          <div className='Insesion'>
            Iniciar sesión
          </div>
          <div>
            <div className='TipoDocumento'>
              <text>Tipo de documento: *</text>
            </div>
            <select className="menutipodocumento">
              <option value="rigatoni">Cédula</option>
              <option value="dave">Tarjeta Identidad</option>
              <option value="pumpernickel">Cedula Extranjeria</option>
              <option value="reeses">Pasaporte</option>
            </select>
          </div>
          <div className='numerodocumento'>
            <text>Numero de documento: *</text>
          </div>
          <div>
            <input className="labelnumerodocumento" type="text" id="Name" name="Name" />
          </div>
          <div>
            <div className='Contraseña'>
              <text>Contraseña:  * </text>
            </div>

            <input className="labelnumerodocumento" type="text" id="Name" name="Name" />
          </div>
          <div className='terminos' >
            <div className="recordardatos">
              <input type="checkbox" id="activar" />
            </div>
            <div className="textorecordatos">
              <text>Recordar datos</text>
            </div>
          </div>
          <div >
            <div className="textoverificarcaptcha">
              <text>Verificar captcha: *</text>
            </div>
            <div >
              <div className='verificarcaptcha'>
                <div className="cuadritocaptcha">
                  <input type="checkbox" id="activar" />
                </div>
                <div className='verificarcaptcha1'>
                  <text>No soy un robot</text>
                </div>
                <div className="imagencaptcha">
                  <img src={captcha} alt='captcha' />
                </div>
              </div>
            </div>

          </div>
          <div>
            <button className="boton4" onClick={handleNext}>Iniciar sesión</button>
          </div>
          <div className="olvide">
            <a href='#' onClick={handlesi}>Olvide mi contraseña</a>
          </div>
          <div className="Registrate">
            <a href='#' onClick={handiregis}>Registrarse</a>
          </div>
        </div>
      </center>

    </body>

  )
}

