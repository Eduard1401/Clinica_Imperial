import React from 'react'
import LogoClinica from '../Imagenes/logo-clinica.png'
import captcha from '../Imagenes/captcha.png'
import NombreClinica from '../Imagenes/nombre-clinica.png'

export const Login = () => {
  return (
    <div className="App">
      <header className="logo-clinica">
       <img src={LogoClinica} alt="logo-clinica" className='img-home' />
      </header>
      
      <header className="nombre-clinica">
      <img src={NombreClinica} alt="logo-clinica" className='img-home' />
      </header>
      <header className="rectagunlo179">
        
        
      </header>
      <header className="Rectan-Login">
      <h1 className='title'>OFICINA VIRTUAL</h1>
        
      </header>
      <header className="TituloIncioSession">
      <h1 className='title'>Inicio sesión</h1>
      </header>

      <header className="menuselector">
        <label for="names">Tipo de documento: *</label>
      
      
        <select className="menuselector2">
        <option value="rigatoni">Cedula</option>
        <option value="dave">Tarjeta Identidad</option>
        <option value="pumpernickel">Cedula Extranjeria</option>
        <option value="reeses">NIT</option>
        </select>
        
      </header>
      <header className="numeroidentidad">
      <label for="Name">Número de Identidad: *</label>
      <input className="labelnumidentidad" type="text" id="Name" name="Name" />
      </header>
      
      <header className="numerocontraseña" >
        <label for="Name">Contraseña: *</label>
        <input className="labelcontraseña" type="text" id="Name" name="Name" />
      </header>
      <input className="checkbox" type="checkbox" id= "activar"/>
      <label className="labelrecordatos"for="activar">Recordar mis datos</label>
      <label className="labelverificarcaptcha"for="activar">Verifica el captcha: *</label>
      <header className="cuadroverificarcaptcha">
      <input className="checkbox2" type="checkbox" id= "activar"/> 
      <label className="labelnorobot" for="activar">No soy un Robot</label>
      <img className="imgcaptcha" src={captcha} alt="captcha"  />
      </header>
      <button className="boton35">Iniciar sesión</button>
      <label className="labelolvidecontras"for="activar">Olvide mi contraseña</label>
      <label className="labelregistrate"for="activar">Registrate</label>
    </div>
  )
}

