// App.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


// Esquema de validación de yup
const schema = yup.object().shape({
  nombre: yup.string().required('El nombre es obligatorio'),
  grado: yup.string().required('El grado es obligatorio'),
  gimnasio: yup.string().required('El gimnasio es obligatorio'),
});

export default Entrenador = () => {
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
           <div className='mensaje'><h1>Tercer paso</h1></div>
              <form onSubmit={handleSubmit(onSubmit)}>
            <div className='forms-content-escuela'>
                <h1>Registra a tu entrenador</h1>
                <table>
    
                  {/* <tr>
                    <td>
                      <div className='formularios-escuela'>
                        <input {...register('nombre', { required: true })} placeholder='Nombre de tu entrenador'/>
                        {errors.escuela && <p>{errors.escuela.message}</p>}
                      </div>
                    </td>
                  </tr>  */}
                  <tr>
                    <td>
                      <div className='formularios-escuela'>
                        <input {...register('nombre', { required: true })} placeholder='¿Que grado es?'/>
                        {errors.escuela && <p>{errors.escuela.message}</p>}
                      </div>
                    </td>
                  </tr> 
                  {/* <tr>
                    <td>
                      <div className='formularios-escuela'>
                        <input {...register('nombre', { required: true })} placeholder='¿A que gimnasio pertenece?'/>
                        {errors.escuela && <p>{errors.escuela.message}</p>}
                      </div>
                    </td>
                  </tr>  */}
    
                </table>
                <div className='enviar'>
                  <button type="submit" >siguiente</button>
                </div>
            </div>
              </form>
          </div>
  );
}

