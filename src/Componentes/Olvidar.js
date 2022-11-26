import React from 'react'
import logo_clinica from '../Imagenes/logo_clinica.png'
import nombre_clinica1 from '../Imagenes/NOMBRE-CLINI.png'
import captcha from '../Imagenes/captcha.png'
import '../Olvidar.css'

export const Olvidar = () => {

  return (
    <body>
      <header>
        <div className='encabezado'>
        <img className='logo' src={logo_clinica} alt='logo clinica'/>
        <img className='nombre' src={nombre_clinica1} alt='nombre clinica'/>
        </div>
      </header>
      <center>
        <div className='cuadro'>
          <header>
            <text>OFICINA VIRTUAL</text>
          </header>
          <div  className='Insesion'>
            Olvide mi contraseña
          </div>
          <div className='texto1'>
            <text>Para restablecer la contraseña, registra la siguiente información:</text>
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
          <div  className='numerodocumento'>
            <text>Numero de documento: *</text>
          </div>
          <div>
            <input className="labelnumerodocumento" type="text" id="Name" name="Name" />
          </div>  
          <div className="textoverificarcaptcha">
              <text>Verificar captcha: *</text>
            </div>        
          <div >
            <div className='verificarcaptcha'>
              <div className="cuadritocaptcha">
              <input  type="checkbox" id= "activar"/>
              </div>
              <div className='verificarcaptcha1'>
              <text>No soy un robot</text>
              </div>
              <div className="imagencaptcha">
              <img  src={captcha} alt='captcha' />
              </div>
            </div>
          </div>
          
          <div>
            <button className="boton4">Restablecer</button>
          </div>
          <div className="olvide">
            <a  href='#'>Regresar</a>
          </div>
         
          
        </div>
      </center>

    </body>

  )
}