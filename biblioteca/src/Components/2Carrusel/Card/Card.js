import React from 'react';
import '../Carrusel.css';
import Cover from './Cover';
import Info from "./Info";
import Rate from '../../sharedComponents/Rate';

// const Card = ({bookInfo, style, dark}) => {
//   return (
//     <div className="Card" style={style}>
//       <Cover img={bookInfo.url}/>
//       <Info 
//         titulo={bookInfo.titulo} 
//         autor={bookInfo.autor} 
//         rate={bookInfo.rate}
//         voters={bookInfo.votos}
//         color={dark} 
//         descripcion={bookInfo.descripcion}             
//       />
//     </div>
// );
// }
const Card = ({bookInfo, style, dark}) => {
  const textColor = '#FFFFFF';
  return (
    <div className="Card" style={style}>
      <div className="Info">
        <h1>{bookInfo.titulo}</h1>
        <p className="Autor">por {bookInfo.autor}</p>
        <Rate rate={bookInfo.rate} voters={bookInfo.voters} color={dark} textColor={textColor} />
        <div className="Descripcion">
            <p>{bookInfo.descripcion}</p>
        </div>
        <div className='VerLibro' style={dark}>
        <button style={dark}>Ver Libro</button>
      </div>
      </div>
    </div>
  )
}

export default Card;