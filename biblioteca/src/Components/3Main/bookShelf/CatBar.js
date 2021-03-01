import React, { useState, useEffect } from 'react';
import baul from '../../sharedComponents/Baul'
import '../main.css'

const getCat = categorias =>{
    //console.table(categorias.slice(0,2))
     let selected = []
     for(let i=0; i<4; i++){
         selected.push(categorias[Math.floor(Math.random() * categorias.length)])
     }
     console.log(selected[0])

    console.log(Array.isArray(categorias))
}
const CatBar = () => {
    const [cats, setCats] = useState({})

    useEffect(() => {
        baul.getCats()
        .then(cate => {
            setCats(cate)
            // console.table(cate.slice(0,2))
        })
        .catch(e => console.log(e))
    },[])
    

    return ( 
        <div className="NavBar">
            {getCat(cats)}
        </div>
    )
    
}

export default CatBar;