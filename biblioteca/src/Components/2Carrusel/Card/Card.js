import React, { Component } from 'react';
import '../Carrusel.css';
import Cover from './Cover';
import Info from "./Info";

const Card = ({bookInfo, style, dark}) => {
  return (
    <div className="Card" style={style}>
      <Cover img={bookInfo.url}/>
      <Info 
        titulo={bookInfo.titulo} 
        autor={bookInfo.autor} 
        rate={bookInfo.rate}
        voters={bookInfo.votos}
        color={dark} 
        descripcion={bookInfo.descripcion}             
      />
    </div>
);
}

export default Card;