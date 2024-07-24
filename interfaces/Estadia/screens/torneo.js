import React from 'react';
import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { readCompetidoresPorTorneo } from '../services/compServices';

export default function Torneo() {
    const gettorneo = async () =>{
        const res = await readCompetidoresPorTorneo("fpWa8CNR")
        console.log(res)
    }
    useEffect(() => {
        gettorneo()
      }, []);
  return (
    <div className='content'>

    </div>
  );
}