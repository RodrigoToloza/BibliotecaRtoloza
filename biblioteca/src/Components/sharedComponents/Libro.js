import React, {useEffect, useState} from 'react'
import axios from 'axios';
import Carrusel from '../2Carrusel/Carrusel';

const Libro = () => {
    const [book, setLibro] = useState([]);
    useEffect(()=> {
        axios('http://localhost:3525/libros')
        .then(res => {
            setLibro(res.data);
        })
        .catch(err => {
            console.log(err)
        })
    },[])
    
    return (
        <div>
            {<Carrusel book={book} />}
        </div>
    )
}

export default Libro
