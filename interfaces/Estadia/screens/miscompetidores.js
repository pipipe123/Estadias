import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { readCompetidoresByGimnasio } from '../services/compServices';
import { FaPlus } from 'react-icons/fa';
import '../css/menuprincipal.css';
import HeaderHome from '../components/header-home';
import Competidor from '../components/competidor';
import { FaBars, FaArrowLeft } from 'react-icons/fa';
import { useManejoSesion } from '../services/sesion.js';

const MisCompetidores = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const [usuario, setUsuario] = useState('');

  const { gimnasio } = location.state || { gimnasio: '' };
  const { escuela } = location.state || { escuela: '' };

  const [competidores, setCompetidores] = useState([]);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const user = location.state?.usuario || null;
    setUsuario(user);
    useManejoSesion(user, navigate);

    if (gimnasio) {
      readCompetidoresByGimnasio(gimnasio)
        .then(response => {
          setCompetidores(response.data);
        })
        .catch(error => {
          setError(error.message);
        });
    }
  }, [gimnasio]);
  const menu = () => {
    navigate('/home', { state: { usuario: usuario } });
  };
  const gyms = () => {
    navigate('/Mis_Gimnasios', { state: { escuela: escuela, usuario: usuario } });
  };


  const toggleForm = () => {
    setShowForm(!showForm);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='container'>
      <HeaderHome />
      <div className='sidebar'>
        <ul>
          <li><button onClick={toggleForm}><FaPlus className="add-icon" /></button></li>
          <li><button onClick={menu}>Menu</button></li>
          <li><button onClick={gyms}>mis gimnasios</button></li>

        </ul>
      </div>
      <div className='content-menuprincipal'>
        <h2>Competidores del gimnasio {gimnasio}</h2>
        <div className='scrollable-content'>
          {competidores.length === 0 ? (
            <p>No se encontraron competidores para este gimnasio.</p>
          ) : (
            <ul>
              {competidores.map((competidor, index) => (
                <li key={index}>
                  <h3>{competidor.nombre}</h3>
                  <p>Edad: {competidor.edad}</p>
                  <p>Peso: {competidor.peso}</p>
                  <p>Cinta: {competidor.cinta}</p>
                  <p>Categoria: {competidor.categoria}</p>
                  <p>Estatura: {competidor.estatura}</p>
                  <p>Imc: {competidor.imc}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
        {showForm && <Competidor gimnasio={gimnasio} />}
        <div className='fondo-principal'>
          <img src="../assets/fondo-principal.jpg" alt="Fondo Principal" />
        </div>
      </div>
    </div>
  );
};

export default MisCompetidores;
