import React from 'react'
import logo_clinica from '../Imagenes/logo_clinica.png'
import nombre_clinica from '../Imagenes/nombre_clinica.png'
import captcha from '../Imagenes/captcha.png'
import '../Registrate.css'

export const Registrate = () => {

  return (
    <body>
        <center>
      <header>
        <div className='encabezado'>
        <img className='logo' src={logo_clinica} alt='logo clinica'/>
        <img className='nombre' src={nombre_clinica} alt='nombre clinica'/>
        </div>
      </header>
      </center>
      <center>
        <div className='cuadro'>
          <header>
            <text>OFICINA VIRTUAL</text>
          </header>
          <div  className='Insesion'>
            Registrate
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
            <div>
              <div className='fechanacimiento'>
                <text>Fecha de nacimiento: DD/MM/AA  * </text>
              </div>
              <input className="labelcontraseña" type="text" id="Name" name="Name" />
            </div>
            <div>
              <div className='Nombres'>
                <text>Primer nombre:  *  </text>
              </div>
              <input className="labelcontraseña" type="text" id="Name" name="Name" />
            </div>
            <div>
              <div className='Apellidos'>
                <text>Segundo nombre:  *  </text>
              </div>
              <input className="labelcontraseña" type="text" id="Name" name="Name" />
            </div>
            <div>
              <div className='Nombres'>
                <text>Primer apellido:  *  </text>
              </div>
              <input className="labelcontraseña" type="text" id="Name" name="Name" />
            </div>
            <div>
              <div className='Apellidos'>
                <text>Segundo apellido:  *  </text>
              </div>
              <input className="labelcontraseña" type="text" id="Name" name="Name" />
            </div>
            <div>
              <div className='Crearcontraseña'>
                <text>Crear contraseña:  *  </text>
              </div>
              <input className="labelcontraseña" type="text" id="Name" name="Name" />
            </div>
            <div>
              <div className='Confircontraseña'>
                <text>Confirmar contraseña:  *  </text>
              </div>
              <input className="labelcontraseña" type="text" id="Name" name="Name" />
            </div>
            <div>
              <div className='Correo'>
                <text>Correo electronico:  *  </text>
              </div>
              <input className="labelcontraseña" type="text" id="Name" name="Name" />
            </div>
            <div>
              <div className='confirmacorreo'>
                <text>Confirma tu correo electronico  * </text>
            </div>
              <input className="labelcontraseña" type="text" id="Name" name="Name" />
            </div>
            <div>
              <div className='Apellidos'>
                <text>Telefono Celular:  *  </text>
              </div>
              <input className="labelcontraseña" type="text" id="Name" name="Name" />
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
          <div className='terminos' >
              <div className="recordardatos">
                <input  type="checkbox" id= "activar"/>
              </div>
              <div className="textorecordatos">
              <text>Acepto terminos y condiciones</text>
              </div>
            </div>
          <div>
            <button className="boton4">Registrarme</button>
          </div>
          <div className="olvide">
            ¿Ya tienes cuenta?
            <a  href='#'>Iniciar sesión</a>
          </div>
          
        </div>
      </center>

    </body>

  )
}
