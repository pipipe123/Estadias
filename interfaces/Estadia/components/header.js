import React from 'react'
import '../css/header.css'
import '../css/general.css'

import logo from '../assets/logo.jpg'
const Header = () =>{
    return(
        <header className='sticky-header'>
            <h1>Graficas GFCARTS</h1>
            <div className='Infos'>
                <h2><a href='#'>Login</a></h2>
                <h2><a href='#'>Registro</a></h2>
                <img src={'../assets/logo.jpg'} className='logo-img'/>
            </div>
        </header>
    );
};


export default Header;