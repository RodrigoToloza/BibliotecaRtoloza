import React, { Component } from 'react';
import '../Carrusel.css';
import Rate from '../../sharedComponents/Rate';
import Descripcion from './Descripcion';
import VerLibro from './VerLibro'

const Info = ({titulo, autor, rate, color,voters, descripcion}) => {
    const textColor = '#FFFFFF';
        return (
            <div className="Info">
                <h1>{titulo}</h1>
                <p className="Autor">por {autor}</p>
                <Rate rate={rate} voters={voters} color={color} textColor={textColor} />
                <Descripcion descripcion={descripcion} />
                <VerLibro color={color} />
            </div>
        );
}

export default Info
