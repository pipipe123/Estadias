import React from 'react';
import './css/general.css';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainApp from './components/mainapp.js'; // Corrección aquí
import Header from './components/header.js';
import Signup from './screens/signup.js';
import Login from './screens/login.js';
import Competidor from './components/competidor.js';

import Escuela from './components/escuela.js';
import Gimnasio from './components/gimnasio.js';
import Comencemos from './screens/comencemos.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Torneo from './screens/torneo.js';
export default function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<MainApp />} />
          <Route path="/Torneo" element={<Torneo />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Registro" element={<Signup />} />
          <Route path="/Competidor" element={<Competidor />} />

          <Route path="/Escuela" element={<Escuela />} />
          <Route path="/Gimnasio" element={<Gimnasio />} />
          <Route path="/Comencemos" element={<Comencemos />} />
      </Routes>
    </Router>
  );
}
