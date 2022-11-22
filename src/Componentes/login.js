import React from 'react'
import LogoClinica from '../Imagenes/logo_clinica.png'
import NombreClinica from '../Imagenes/nombre_clinica.png'
import captcha from '../Imagenes/captcha.png'


export const Login = () => {

  return (
    <body>
      <header>
        <div className='encabezado'>
          <img src={LogoClinica} alt='logo clinica' width="60px"/>
          <img src={NombreClinica} alt='nombre clinica' width="140px" height="55px" />
        </div>
      </header>
      <div className='cuadro'>
        <header>
          <text>OFICINA VIRTUAL</text>
        </header>
        <div  className='Insesion'>
          Iniciar sesión
        </div>
        <div  className='TipoDocumento'>
          Tipo de documento: *
          <select className="menutipodocumento">
            <option value="rigatoni">Cedula</option>
            <option value="dave">Tarjeta Identidad</option>
            <option value="pumpernickel">Cedula Extranjeria</option>
            <option value="reeses">Pasaporte</option>
          </select>
        </div>
        <div  className='numerodocumento'>
          Numero de documento: *
          <input className="labelnumerodocumento" type="text" id="Name" name="Name" />
        </div>
        <div  className='numerodocumento'>
          Contraseña: *
          <input className="labelnumerodocumento" type="text" id="Name" name="Name" />
        </div>
        <div  className="recordardatos">
          <input className="checkbox" type="checkbox" id= "activar"/>
          Recordar mis datos
        </div>
        <div className="textoverificarcaptcha">
          Verificar captcha: *
          
          <div className='verificarcaptcha'>
            <input className="checkbox" type="checkbox" id= "activar"/>
            <h5 >No soy un robot</h5>
          </div>
          <div className="imagencaptcha">
            <img src={captcha} alt='captcha' width="50px" height="50px" />
          </div>
        
        </div>
        <div>
          <button className="boton4">Iniciar sesión</button>
        </div>
        <div className="olvide">
          <a  href='#'>Olvide mi contraseña</a>
        </div>
        <div className="Registrate">
          <a  href='#'>Registrarse</a>
        </div>
      </div>
    </body>

  )
}

