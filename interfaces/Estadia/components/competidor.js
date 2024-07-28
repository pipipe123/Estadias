// App.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { createCompetidor } from '../services/compServices';

// Esquema de validación de yup
const schema = yup.object().shape({
  nombre: yup.string().required('El nombre es obligatorio'),
  grado: yup.string().required('El grado es obligatorio'),
  anioNacimiento: yup
    .number()
    .typeError('Debe ser un número')
    .required('El año de nacimiento es obligatorio')
    .min(1900, 'Año no válido')
    .max(new Date().getFullYear(), 'Año no válido'),
  peso: yup
    .number()
    .typeError('Debe ser un número')
    .required('El peso es obligatorio')
    .positive('Debe ser un número positivo'),
  gimnasio: yup.string().required('El gimnasio es obligatorio'),
  escuela: yup.string().required('La escuela es obligatoria'),
});

export default Competidor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const res = await createCompetidor(data);
    console.log(res);
    console.log(data);
  };

  return (

    
<div className='forms-escuela'>
       <div className='mensaje'><h1>Ultimo paso</h1></div>
          <form onSubmit={handleSubmit(onSubmit)}>
        <div className='forms-content-escuela'>
            <h1>Registra un Competidor</h1>
            <table>

              <tr>
                <td>
                  <div className='formularios-escuela'>
                    <input {...register('nombre', { required: true })} placeholder='Nombre del competidor'/>
                    {errors.escuela && <p>{errors.escuela.message}</p>}
                  </div>
                </td>
              </tr> 
              <tr>
                <td>
                  <div className='formularios-escuela'>
                  {/* <label> */}
                {/* Selecciona tu cinturón: */}
                <select {...register('grado', { required: 'Seleccione un cinturón' })}>
                    <option value="">¿Que cinturón es?</option>
                    <option value="Cinturón Blanco">Cinturón Blanco</option>
                    <option value="Cinturón Blanco/Amarillo">Cinturón Blanco- Avanzado</option>
                    <option value="Cinturón Amarillo">Cinturón Amarillo</option>
                    <option value="Cinturón Amarillo/Verde">Cinturón Amarillo- Avanzado</option>
                    <option value="Cinturón Verde">Cinturón Verde</option>
                    <option value="Cinturón Verde/Azul">Cinturón Verde- Avanzado</option>
                    <option value="Cinturón Azul">Cinturón Azul</option>
                    <option value="Cinturón Azul/Rojo">Cinturón Azul- Avanzado</option>
                    <option value="Cinturón Rojo">Cinturón Rojo</option>
                    <option value="Cinturón Rojo/Negro">Cinturón Rojo- Avanzado</option>
                    <option value="Cinturón Negro">Cinturón Negro</option>
                </select>
            {/* </label> */}
            {errors.belt && <p>{errors.belt.message}</p>}
                  </div>
                </td>
              </tr> 
              <tr>
                <td>
                  <div className='formularios-escuela'>
                    <input {...register('anioNacimiento', { required: true })} placeholder='¿En que año nacio?'/>
                    {errors.escuela && <p>{errors.escuela.message}</p>}
                  </div>
                </td>
              </tr> 
              <tr>
                <td>
                  <div className='formularios-escuela'>
                    <input {...register('modalidad', { required: true })} placeholder='¿En que participará?'/>
                    {errors.escuela && <p>{errors.escuela.message}</p>}
                  </div>
                </td>
              </tr> 
              <tr>
                <td>
                  <div className='formularios-escuela'>
                    <input {...register('peso', { required: true })} placeholder='¿Cuanto pesa?'/>
                    {errors.escuela && <p>{errors.escuela.message}</p>}
                  </div>
                </td>
              </tr> 


            </table>
            <div className='enviar'>
              <button type="submit" >siguiente</button>
            </div>
        </div>
          </form>
      </div>
  );
}


