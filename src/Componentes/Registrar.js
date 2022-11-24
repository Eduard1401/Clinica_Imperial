import React from 'react'
import LogoClinica from '../Imagenes/logo-clinica.png'
import captcha from '../Imagenes/captcha.png'
import NombreClinica from '../Imagenes/nombre-clinica.png'
import '../login.css';


export const Registrar = () => {
  return (
    <div className="App">
      <header className="logo-clinica">
       <img src={LogoClinica} alt="logo-clinica" className='img-home' />
      </header>
      
      <header className="nombre-clinica">
      <img src={NombreClinica} alt="logo-clinica" className='img-home' />
      </header>
      <header className="rectagunlo180">
        
        
      </header>
      <header className="Rectan-Login">
      <h1 className='title'>OFICINA VIRTUAL</h1>
        
      </header>
      <header className="TituloIncioSession">
      <h1 className='title'>Registrate</h1>
      </header>

      
      <header className="menuselectort">
      
        <label for="names">Tipo de documento: *</label>
      
      
        <select className="menuselector2">
        <option value="rigatoni">Cedula</option>
        <option value="dave">Tarjeta Identidad</option>
        <option value="pumpernickel">Cedula Extranjeria</option>
        <option value="reeses">Pasaporte</option>
        </select>
        
      </header>
      <header className="numeroidentidadt">
      <label for="Name">Número de Identidad: *</label>
      <input className="labelnumidentidad" type="text" id="Name" name="Name" />
      </header>
      
      <header className="Fechanacimiento">
      <label for="Name">Fecha de nacimiento: DD/MM/AA *</label>
      <input className="labelnumidentidad" type="text" id="Name" name="Name" />
      </header>

      <header className="primernombre">
      <label for="Name">Primer nombre: *</label>
      <input className="labelnumidentidad" type="text" id="Name" name="Name" />
      </header>

      <header className="segundonombre">
      <label for="Name">Segundo nombre: </label>
      <input className="labelnumidentidad" type="text" id="Name" name="Name" />
      </header>

      <header className="primerapellido">
      <label for="Name">Primer apellido: *</label>
      <input className="labelnumidentidad" type="text" id="Name" name="Name" />
      </header>

      <header className="segundoapellido">
      <label for="Name">Segundo apellido:</label>
      <input className="labelnumidentidad" type="text" id="Name" name="Name" />
      </header>

      <header className="crearcontraseña">
      <label for="Name">Crear contraseña: </label>
      <input className="labelnumidentidad" type="text" id="Name" name="Name" />
      </header>

      <header className="confirmarcontraseña">
      <label for="Name">Confirmar contraseña: *</label>
      <input className="labelnumidentidad" type="text" id="Name" name="Name" />
      </header>


      <header className="correoelectronico">
      <label for="Name">Correo electronico: *</label>
      <input className="labelnumidentidad" type="text" id="Name" name="Name" />
      </header>


      <header className="confirmarcorreo">
      <label for="Name40">Confirmar tu correo electronico: *</label>
      <input className="labelnumidentidad" type="text" id="Name" name="Name" />
      </header>

      <header className="Telefonoce">
      <label for="Name">Telefono Celular: *</label>
      <input className="labelnumidentidad" type="text" id="Name" name="Name" />
      </header>



      
      <label className="labelverificarcaptchaaa"for="activar">Verifica el captcha: *</label>
      <header className="cuadroverificarcaptchaaa">
      <input className="checkbox2" type="checkbox" id= "activar"/> 
      <label className="labelnorobot" for="activar">No soy un Robot</label>
      <img className="imgcaptcha" src={captcha} alt="captcha"  />
      </header>
      <button className="boton37">Iniciar sesión</button>
      <label className="labelolvidecontrasss"for="activar">Regresar</label>
    </div>
  )
}
