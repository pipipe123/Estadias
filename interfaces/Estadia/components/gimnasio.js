// App.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


// Esquema de validación de yup
const schema = yup.object().shape({
  gimnasio: yup.string().required('El nombre del gimnasio es obligatorio'),
  escuela: yup.string().required('El nombre de la escuela es obligatorio'),
  entrenador: yup.string().required('El nombre del entrenador es obligatorio'),
});

export default gimnasio = () => {
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
       <div className='mensaje'><h1>Segundo paso</h1></div>
          <form onSubmit={handleSubmit(onSubmit)}>
        <div className='forms-content-escuela'>
            <h1>Registra un gimnasio</h1>
            <table>

              <tr>
                <td>
                  <div className='formularios-escuela'>
                    <input {...register('nombre', { required: true })} placeholder='Nombra a tu Gimnasio'/>
                    {errors.escuela && <p>{errors.escuela.message}</p>}
                  </div>
                </td>
              </tr> 
              {/* <tr>
                <td>
                  <div className='formularios-escuela'>
                    <input {...register('nombre', { required: true })} placeholder='Nombre de tu escuela'/>
                    {errors.escuela && <p>{errors.escuela.message}</p>}
                  </div>
                </td>
              </tr>  */}
              <tr>
                <td>
                  <div className='formularios-escuela'>
                    <input {...register('nombre', { required: true })} placeholder='¿Quien sera tu entrenador?'/>
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


