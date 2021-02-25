import React, {useState, useEffect} from 'react'
import './headerStyle.css';
import axios from 'axios';

const Categorias = () => {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        axios
        .get('http://localhost:3525/api/books/cats')
        .then(res => {
            setDatos(res.data);
        })
        .catch(err => {
            console.log(err)
        })    
    }, []);
    return (
        <div className='BrowseCategory'>
            <select>
                <option value="categorias" disabled selected>Categorias</option>
                {datos.map(index => {
                    return <option value={index.nombre}>{index.nombre}</option>
                })}
            </select>
        </div>
    )
}
export default Categorias
