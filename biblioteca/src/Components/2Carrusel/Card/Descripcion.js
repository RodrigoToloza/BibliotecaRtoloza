import React, { Component } from 'react';
import '../Carrusel.css';
import axios from 'axios';

const Descripcion = ({descripcion}) => {
    return (
        <div className="Descripcion">
            <p>{descripcion}</p>
        </div>
    )
}

export default Descripcion
