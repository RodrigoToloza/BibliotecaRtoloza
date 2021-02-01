import React from 'react'
import '../Carrusel.css';

const Cover = ({img}) => {   
    return (
        <div className="Cover">
            <img src={require('../../../Assets/Covers/' + img)} />                
        </div>
    );
}

export default Cover