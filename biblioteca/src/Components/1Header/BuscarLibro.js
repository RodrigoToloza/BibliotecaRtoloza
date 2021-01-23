import React from 'react'
import './headerStyle.css'
import {FaSearch} from 'react-icons/fa'


const BuscarLibro = () => {
    return (
        <div className='SearchBook'>
            <FaSearch className='iconSearch'/>
            <input placeholder="Buscar Libro" />
        </div>
    )
}

export default BuscarLibro
