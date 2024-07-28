import React from 'react';
import HeaderHome from '../components/header-home'; // Asegúrate de importar el componente correctamente
import '../css/menuprincipal.css'; // Importa el CSS del menú principal
import { FaBars } from 'react-icons/fa'; // Importa los íconos de React Icons
import '../css/general.css'; // Importa el CSS general

export default function MenuPrincipal() {
  return (
    <div className='container'>
      <HeaderHome />
      <div className='sidebar'>
        {/* Aquí puedes añadir los elementos del menú lateral */}
        <ul>
          <li><FaBars className="menu-icon" /></li>
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
                    
                <tr >
                    <td className='fila-2'  >
                    <div className='admin'>
                        <h1>Admin</h1>
                        <p>Coming soon...</p>
                    </div>
                    </td>
                    <td className='fila-2'colSpan={2} >
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
                    <td ><div className='algomas'><h3>Coming soon...</h3></div></td>
                    <td ><div className='algomas'><h3>Coming soon...</h3></div></td>
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
