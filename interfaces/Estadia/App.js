import React from 'react';
import './css/general.css';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainApp from './components/mainapp.js'; // Corrección aquí
import Header from './components/header.js';
import Signup from './screens/signup.js';
import Login from './screens/login.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
export default function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<MainApp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Registro" element={<Signup />} />
          {/* <Route path="/Seleccion-cultivo" element={<PantallaCultivo />} /> */}
      </Routes>
    </Router>
  );
}
