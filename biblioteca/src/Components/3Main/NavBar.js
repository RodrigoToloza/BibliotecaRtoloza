import React, { useState, useEffect} from 'react'
import LibroContext from '../../Context/LibroContext'
import axios from 'axios'
import Test from './Test'

const NavBar = () => {
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
        <LibroContext.Provider value={book}>
            <div>
                <Test ></Test>
            </div>
        </LibroContext.Provider>
    )
}

export default NavBar
