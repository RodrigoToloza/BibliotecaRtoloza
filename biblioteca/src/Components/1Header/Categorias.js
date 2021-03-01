import React, {useState, useEffect} from 'react'
import './headerStyle.css';
import baul from '../sharedComponents/Baul';

const Categorias = () => {
    const [cats, setCats] = useState([]);

    useEffect(() => {
          baul.getCats()
          .then(cate => setCats(cate)) 
    }, []);
    return (
        <div className='BrowseCategory'>
            <select>
                <option value="categorias" disabled selected>Categorias</option>
                {cats.map(index => {
                    return <option value={index.nombre} key={index.id}>{index.nombre}</option>
                })}
            </select>
        </div>
    )
}
export default Categorias
