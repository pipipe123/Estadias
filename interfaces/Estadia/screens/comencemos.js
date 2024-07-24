import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";
import { BsClipboardCheck } from "react-icons/bs";
import '../css/general.css';
import '../css/comencemos.css';
import Competidor from '../components/competidor';

import Escuela from '../components/escuela';
import Gimnasio from '../components/gimnasio';

const Comencemos = () => {
    const components = ['Escuela', 'Gimnasio',  'Competidor'];
    const [selectedComponent, setSelectedComponent] = useState(components[0]);

    const renderComponent = () => {
        switch (selectedComponent) {
            case 'Competidor':
                return <Competidor />;
            case 'Escuela':
                return <Escuela />;
            case 'Gimnasio':
                return <Gimnasio />;
            default:
                return <Competidor />;
        }
    };

    const handlePrevious = () => {
        const currentIndex = components.indexOf(selectedComponent);
        const previousIndex = (currentIndex - 1 + components.length) % components.length;
        setSelectedComponent(components[previousIndex]);
    };

    const handleNext = () => {
        const currentIndex = components.indexOf(selectedComponent);
        const nextIndex = (currentIndex + 1) % components.length;
        setSelectedComponent(components[nextIndex]);
    };

    const isFirstComponent = components.indexOf(selectedComponent) === 0;
    const isLastComponent = components.indexOf(selectedComponent) === components.length - 1;

    return (
        <div className='content'>
            <div className='content-comencemos'>
     
                <div className='fondo-comencemos'>
                    <img src='../assets/fondo-comencemos.jpg' alt='Fondo' />
                </div>
                <div className='menu-flotante'>
                    <ul>
                        <li onClick={() => setSelectedComponent('Escuela')}>Escuela</li>
                        <li onClick={() => setSelectedComponent('Gimnasio')}>Gimnasio</li>
                        <li onClick={() => setSelectedComponent('Competidor')}>Competidor</li>
                        
                    </ul>
                </div>
                <div className='forms-comencemos'>

                {!isFirstComponent && (
                    <BsChevronCompactLeft
                        className='icon-left'
                        onClick={handlePrevious}
                    />
                )}
                    {renderComponent()}

                    {!isLastComponent && (
                    <BsChevronCompactRight
                        className='icon-right'
                        onClick={handleNext}
                    />
                )}
                </div>
    
            </div>
        </div>
    );
};

export default Comencemos;
