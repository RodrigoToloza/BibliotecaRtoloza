import React from 'react';
import useLibro from '../../Hook/useLibro'

export default function PruebaTitulo(){
    const {titulo} = useLibro();

    for(let i=0; i<3; i++){
        return <div>{titulo}</div>
    }
}