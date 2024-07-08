import React from 'react'
import '../css/header.css'
import logo from '../assets/logo.jpg'
const Header = () =>{
    return(
        <header className='sticky-header'>
            <h1>Graficas GFCARTS</h1>
            <div className='Infos'>
                <h2>Login</h2>
                <h2>Registro</h2>
                <img src={'../assets/logo.jpg'} className='logo-img'/>
            </div>
        </header>
    );
};


export default Header;