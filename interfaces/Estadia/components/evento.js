import React, { useState, useEffect } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { createEvento } from '../services/compServices';
import '../css/general.css';
import '../css/evento.css';

// Esquema de validación de yup
const schema = yup.object().shape({
  nombre: yup.string().required('El nombre del evento es obligatorio'),
});

const Evento = ({ usuario, onEventoSubmit }) => {
    
    // const [usuario, setUsuario] = useState('');
    // const user = location.state?.usuario || null;
    // setUsuario(user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      // Crear el evento
   
      
      // Preparar los datos para la función onEventoSubmit
      let data2 = { ...data,usuario };
      console.log(data2)
      const res = await createEvento(data2);
        console.log(res)
    } catch (error) {
      console.error('Error al crear el evento', error);
    }
  };

  return (
    <div className='forms-evento'>
      <div className='mensaje'><h1>Primer paso</h1></div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='forms-content-evento'>
          <h1>Registra tu evento</h1>
          <table>
            <tr>
              <td>
                <div className='formularios-evento'>
                  <input {...register('nombre', { required: true })} placeholder='Nombre del evento'/>
                  {errors.nombre && <p>{errors.nombre.message}</p>}
                </div>
              </td>
            </tr> 
          </table>
          <div className='enviar'>
            <button type="submit">Siguiente</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Evento;
