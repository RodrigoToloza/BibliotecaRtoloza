import {React, useState, useEffect} from 'react'
import './headerStyle.css';
import axios from 'axios';

const Categorias = () => {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        axios
        .get('http://localhost:3525/json')
        .then(res => {
            setDatos(res.data);
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })    
    }, []);
    datos.map((index) => {
        return (
            <option key={datos.rut}>{console.log(index)}</option>
        )
    })
    return (
        <div className='BrowseCategory'>
            <select>
                <option value="" disabled selected>Categorias</option>
                {Categorias}
            </select>
        </div>
    )
}
/* const Categorias = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function buscarNombre(){
            const result = await axios(
                'http://localhost:3525/json',
            );
            setData(result.data)
        }
    })

    return (
        <div className='BrowseCategory'>
            <select>
                <option value="" disabled selected>Categorias</option>
                {Categorias}
            </select>
        </div>
    )
}
*/
export default Categorias
