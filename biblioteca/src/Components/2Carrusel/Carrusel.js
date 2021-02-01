import React, { Component, useEffect, useState } from 'react';
import './Carrusel.css';
import Card from './Card/Card';
import Slider from 'react-slick';
//import Book from '../sharedComponents/Libro'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const getBook = libro => {
    const backgroundColors = [
                 {backgroundColor:'#EC407A'}, 
                 {backgroundColor:'#039BE5'}, 
                 {backgroundColor:'#AB47BC'}, 
                 {backgroundColor:'#FF5252'}, 
                 {backgroundColor:'#00E676'}, 
               ]; 
    const darkColors = [ 
                 {color:'#AD1457'}, 
                 {color:'#01579B'}, 
                 {color:'#6A1B9A'}, 
                 {color:'#D50000'}, 
                 {color:'#00C853'}, 
               ];
    let carouselBooks = [];
    const textColor = 'color: #FFFFFF;';
               
    for(let i=0; i < libro.length; i++) {
        const color = backgroundColors[i];
        const dark = darkColors[i];
        carouselBooks.push(
                <div key={i} ><Card bookInfo={libro[i]} style={color} dark={dark}/></div>
        );
    };
                     
    return carouselBooks;
}

const Carrusel = ({book}) => {
var settings = {
            className: 'center',
            centerMode: true,
            infinite: true,
            centerPadding: '30px',
            slidesToShow: 3,
            speed: 500                
                };        
    return(
        <div className="Carrusel">
            <Slider {...settings}>
                   {getBook(book)}
            </Slider>
        </div>
    )
}

// class Carrusel extends React.Component {
//     getBook = () =>{
//     const book = [];

//     async function libro(){
//         await axios('http://localhost:3525/libros')
//         .then(res => {
//             book.push(res.data)
//         })
//         .catch(err => {
//             console.log(err)
//         })
//     }
//     libro();
//     console.log(book)
  

//     const backgroundColors = [
//         {backgroundColor:'#EC407A'}, 
//         {backgroundColor:'#039BE5'}, 
//         {backgroundColor:'#AB47BC'}, 
//         {backgroundColor:'#FF5252'}, 
//         {backgroundColor:'#00E676'}, 
//       ]; 
//       const darkColors = [ 
//         {color:'#AD1457'}, 
//         {color:'#01579B'}, 
//         {color:'#6A1B9A'}, 
//         {color:'#D50000'}, 
//         {color:'#00C853'}, 
//       ];
      
//       let carouselBooks = [];
//       const textColor = 'color: #FFFFFF;';

//       for(let i=0; i < book.length; i++) {
//           const color = backgroundColors[i];
//           const dark = darkColors[i];
//           carouselBooks.push(
//               <div key={i} ><Card bookInfo={book[i]} style={color} dark={dark}/></div>
//           );
//       };
      
//       return carouselBooks;
//     }
//     render(){   
//         var settings = {
//             className: 'center',
//             centerMode: true,
//             infinite: true,
//             centerPadding: '30px',
//             slidesToShow: 3,
//             speed: 500
            
//           };        
//         return(
//             <div className="Carrusel">
//                 <Slider {...settings}>
//                     {this.getBook()}
//                 </Slider>
//             </div>
//         )
//     }
// }

export default Carrusel;

