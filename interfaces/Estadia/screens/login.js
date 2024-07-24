import React from 'react';
import { useForm } from 'react-hook-form';
import '../css/general.css';
import '../css/login.css';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/AuthService';

export default function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = async (data) => {
    console.log(data);
    const res = await login(data)
    console.log(res)
    console.log(data);
    // Aquí podrías agregar la lógica para procesar el inicio de sesión
  };

  const goToSignup = () => {
    document.querySelector('.contenedor-1').classList.add('slide-in');
    setTimeout(() => navigate('/Registro'), 1000);
  };

  return (
    <div className='contenedor-1'>
      <div className='side-1'>
        <div className='side-content-1'>
          <table>
            <tr><td><h1>¡Bienvenido!</h1></td></tr>
            <tr><td><h3>¿Aún no tienes una cuenta?</h3></td></tr>
            <tr><td><div className='separador'></div></td></tr>
            <tr><td><button onClick={goToSignup}>Registrarse</button></td></tr>
          </table>
        </div>
      </div>
      <div className='fondo-1'>
        <img src='../assets/fondo_signup2.jpg' alt="Fondo"></img>
      </div>
      <div className='forms-1'>
        <div className='forms-content'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <table>
              <tr><td><h1>Inicia sesión</h1></td></tr>
              <tr>
                <td>
                  <div className='formularios'>
                    <img src='../assets/user.png' className='icon' alt="Icono Nombre"></img>
                    <input {...register('usuario', { required: true })} placeholder='Nombre'/>
                    {errors.nombre && <span>Este campo es requerido</span>}
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='formularios'>
                    <img src='../assets/envelope.png' className='icon' alt="Icono Correo"></img>
                    <input 
                      type="email" 
                      {...register('correo', {
                        required: true,
                        pattern: {
                          value: /^[a-zA-Z0-9._%+-]+@gmail.com$/,
                          message: "El correo debe ser de dominio @gmail.com"
                        }
                      })} 
                      placeholder='Correo'
                    />
                    {errors.correo && <span>{errors.correo.message}</span>}
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='formularios'>
                    <img src='../assets/lock.png' className='icon' alt="Icono Contraseña"></img>
                    <input type="password" {...register('pass', { required: true })} placeholder='Contraseña'/>
                    {errors.contraseña && <span>Este campo es requerido</span>}
                  </div>
                </td>
              </tr>
              <tr><td><div className='separador2'></div></td></tr>
              <tr><td><button type="submit">Iniciar sesión</button></td></tr>
              <tr><td><div className='separador'></div></td></tr>
            </table>
          </form>
        </div>
      </div>
    </div>
  );
}
