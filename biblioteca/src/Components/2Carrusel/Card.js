import React from "react";
import "./Carrusel.css";
import Rate from "../sharedComponents/Rate";

const Card = ({ bookInfo, style, dark }) => {
  const textColor = "#FFFFFF";
  return (
    <div className="Card" style={style}>
      <div className="Cover">
        <img src="./img/Covers/got1.jpg" alt="Portada" />
      </div>
      <div className="Info">
        <h1>{bookInfo.titulo}</h1>
        <p className="Autor">por {bookInfo.autor}</p>
        <Rate
          rate={bookInfo.rate}
          voters={bookInfo.voters}
          color={dark}
          textColor={textColor}
        />
        <div className="Descripcion">
          <p>{bookInfo.descripcion}</p>
        </div>
        <div className="VerLibro" style={dark}>
          <button style={dark}>Ver Libro</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
