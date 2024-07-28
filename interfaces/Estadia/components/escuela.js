// App.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import '../css/general'
import '../css/escuela'
import { createEscuela } from '../services/compServices';
// Esquema de validación de yup
const schema = yup.object().shape({
  escuela: yup.string().required('El nombre de la escuela es obligatorio'),
});

export default escuela = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const res= await createEscuela(data)
    console.log(res)
    console.log(data);
  };

  return (

    
<div className='forms-escuela'>
       <div className='mensaje'><h1>Primer paso</h1></div>
          <form onSubmit={handleSubmit(onSubmit)}>
        <div className='forms-content-escuela'>
            <h1>Registra tu escuela </h1>
            <table>

              <tr>
                <td>
                  <div className='formularios-escuela'>

                    <input {...register('nombre', { required: true })} placeholder='Nombra a tu escuela'/>
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


