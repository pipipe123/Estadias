import React, { useState, useEffect } from 'react';
import { FaBars, FaArrowLeft } from 'react-icons/fa'; // Importa los íconos de React Icons
import HeaderHome from '../components/header-home'; // Asegúrate de importar el componente correctamente
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { getEscuela } from '../services/AuthService';
import '../css/menuprincipal.css'; // Importa el CSS del menú principal
import '../css/general.css'; // Importa el CSS general

export default function MenuPrincipal() {
  const [escuela, setEscuela] = useState('');
  const location = useLocation();
  const { usuario } = location.state || { usuario: '' };
  const navigate = useNavigate();

  useEffect(() => {
    const recuperarUsuario = async (usuario) => {
      console.log(usuario)
      try {
        const result = await getEscuela(usuario);
        console.log(result)
        setEscuela(result);
      } catch (error) {
        console.error('Error al recuperar la escuela del usuario:', error);
      }
    };

    if (usuario) {
      recuperarUsuario(usuario);
    }
  }, [usuario]);

  const onBack = () => {
    navigate('/');
  };

  const gyms = () => {
    navigate('/Mis Gimnasios', { state: { escuela: escuela } });
  };

  return (
    <div className='container'>
      <HeaderHome />
      <div className='sidebar'>
        {/* Aquí puedes añadir los elementos del menú lateral */}
        <ul>
          <li><button onClick={onBack}><FaArrowLeft /></button></li>
          <li><FaBars className="menu-icon" /></li>
          <li><button onClick={gyms}><FaBars className="menu-icon" /></button></li>
          {/* Añade más elementos del menú lateral aquí */}
        </ul>
      </div>
      <div className='content-menuprincipal'>
        <div className='content-principal'>
          <table>
            <tr className='fila-1'>
              <td><div className='letrero'>
                <h1>Competidores</h1>
                <p>0</p>
              </div></td>
              <td><div className='letrero'>
                <h1>Gimnasios</h1>
                <p>0</p>
              </div></td>
              <td><div className='letrero'>
                <h1>Cintas negras</h1>
                <p>0</p>
              </div></td>
            </tr>
          </table>

          <table>
            <tr>
              <td className='fila-2'>
                <div className='admin'>
                  <h1>Admin</h1>
                  <p>Coming soon...</p>
                </div>
              </td>
              <td className='fila-2' colSpan={2}>
                <div className='notas-version'>
                  <h2>Notas de versión:</h2>
                  <hr className='divider' />
                  <p>No hay nada que ver aún...</p>
                </div>
              </td>
            </tr>
          </table>
          <table className='fila-3'>
            <tr>
              <td><div className='algomas'><h3>Coming soon...</h3></div></td>
              <td><div className='algomas'><h3>Coming soon...</h3></div></td>
            </tr>
          </table>
        </div>
        <div className='fondo-principal'>
          <img src="../assets/fondo-principal.jpg" alt="Fondo Principal" />
        </div>
      </div>
    </div>
  );
}
