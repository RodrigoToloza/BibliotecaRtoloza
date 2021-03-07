import React, { useState, useEffect} from 'react';
import baul from '../../sharedComponents/Baul';
import Rate from '../../sharedComponents/Rate'
import './bookShelf.css'

const CardBook = (cat) => {
    const [books, setBooks] = useState({});
    useEffect(() =>{
        baul.getBestCat(cat)
        .then(book => {
            setBooks(book)
        })
        .catch(e => console.log(e))
    },[])
    const textColor = '#607D8B'
    return (
      <div>
      <div className="Book" >
            <div className="BookCover">
             <img src={()=>{return `../../Assets/Covers/${books.url}`}} alt="Portada"/>
            <div className="BookInfo">
                <h1>{books.titulo}</h1>
                <p className="Author">por {books.autor}</p>
                <Rate rate={books.rate} voters={books.voters} textColor={textColor} />
                <div className="BookDescription">
                    <p>{books.descripcion}</p>
                </div>
            </div>
          </div>  
      </div>
      </div>
    )
  }

export default CardBook;