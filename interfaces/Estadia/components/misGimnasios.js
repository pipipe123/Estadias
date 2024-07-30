import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { readGimnasioxEscuela } from '../services/compServices';

const MisGimnasios = () => {
  const location = useLocation();
  const { escuela } = location.state || { escuela: '' };

  const [gimnasios, setGimnasios] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (escuela) {
      console.log(escuela);
      readGimnasioxEscuela(escuela)
        .then(response => {
          setGimnasios(response.data);
        })
        .catch(error => {
          setError(error.message);
        });
    }
  }, [escuela]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Gimnasios de la escuela {escuela}</h2>
      {gimnasios.length === 0 ? (
        <p>No se encontraron gimnasios para esta escuela.</p>
      ) : (
        <ul>
          {gimnasios.map((gimnasio, index) => (
            <li key={index}>
              <h3>{gimnasio.nombre}</h3>
              <p>Escuela: {gimnasio.escuela}</p>
              <p>Entrenador: {gimnasio.entrenador}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MisGimnasios;
