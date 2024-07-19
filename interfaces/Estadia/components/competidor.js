// App.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


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

  const onSubmit = (data) => {
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
                    <input {...register('nombre', { required: true })} placeholder='¿Que grado es?'/>
                    {errors.escuela && <p>{errors.escuela.message}</p>}
                  </div>
                </td>
              </tr> 
              <tr>
                <td>
                  <div className='formularios-escuela'>
                    <input {...register('nombre', { required: true })} placeholder='¿En que año nacio?'/>
                    {errors.escuela && <p>{errors.escuela.message}</p>}
                  </div>
                </td>
              </tr> 
              <tr>
                <td>
                  <div className='formularios-escuela'>
                    <input {...register('nombre', { required: true })} placeholder='¿En que participará?'/>
                    {errors.escuela && <p>{errors.escuela.message}</p>}
                  </div>
                </td>
              </tr> 
              <tr>
                <td>
                  <div className='formularios-escuela'>
                    <input {...register('nombre', { required: true })} placeholder='¿Cuanto pesa?'/>
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


