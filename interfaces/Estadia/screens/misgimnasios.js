import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { readGimnasioxEscuela, createGimnasio } from '../services/compServices.js';
import { FaBars, FaPlus } from 'react-icons/fa';
import Gimnasio from '../components/gimnasio';
import { useManejoSesion } from '../services/sesion.js';
import '../css/menuprincipal.css';
import HeaderHome from '../components/header-home';

const MisGimnasios = () => {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState('');
  const location = useLocation();
  const { escuela } = location.state || { escuela: '' };

  const [gimnasios, setGimnasios] = useState([]);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const user = location.state?.usuario || null;
    setUsuario(user);
    useManejoSesion(user, navigate);
    if (escuela) {
      readGimnasioxEscuela(escuela)
        .then(response => {
          setGimnasios(response.data);
        })
        .catch(error => {
          setError(error.message);
        });
    }
  }, [escuela]);

  const handleGymClick = (gimnasio) => {
    navigate('/Mis_Competidores', { state: { gimnasio: gimnasio.nombre, escuela:escuela, usuario: usuario } });
  };

  const handleAddGimnasioClick = () => {
    setShowForm(true);
  };

  const handleGimnasioSubmit = (nombre) => {
    setShowForm(false);
    readGimnasioxEscuela(escuela)
      .then(response => {
        setGimnasios(response.data);
      })
      .catch(error => {
        setError(error.message);
      });
  };

  const menu = () => {
    navigate('/home', { state: { usuario: usuario } });
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='container'>
      <HeaderHome />
      <div className='sidebar'>
        <ul>
          <li><FaBars className="menu-icon" /></li>
          <li><button onClick={menu}><FaBars className="menu-icon" /></button></li> 
          <li><button onClick={handleAddGimnasioClick}><FaPlus className="add-icon" /></button></li>
        </ul>
      </div>
      <div className='content-menuprincipal'>
        <h2>Gimnasios de la escuela {escuela}</h2>
        <div className='scrollable-content'>
          {gimnasios.length === 0 ? (
            <p>No se encontraron gimnasios para esta escuela.</p>
          ) : (
            <ul>
              {gimnasios.map((gimnasio, index) => (
                <li key={index} onClick={() => handleGymClick(gimnasio)}>
                  <h3>{gimnasio.nombre}</h3>
                  <p>Escuela: {gimnasio.escuela}</p>
                  <p>Entrenador: {gimnasio.entrenador}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
        {showForm && <Gimnasio escuela={escuela} onGimnasioSubmit={handleGimnasioSubmit} />}
        <div className='fondo-principal'>
          <img src="../assets/fondo-principal.jpg" alt="Fondo Principal" />
        </div>
      </div>
    </div>
  );
};

export default MisGimnasios;
