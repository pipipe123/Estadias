import React from 'react';
import { FaBars, FaUserCircle } from 'react-icons/fa'; // Importa los íconos de React Icons
import '../css/header-home.css'; // Importa el CSS del header

const HeaderHome = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">Tu Logo</div>
      </div>
      <div className="header-right">
        <FaUserCircle className="profile-icon" />
      </div>
    </header>
  );
};

export default HeaderHome;
