import React, { useState, useEffect } from 'react';
import baul from '../../sharedComponents/Baul'
import '../main.css'
import CardBook from './CardBook'

const CatBar = ( cats ) => {
    console.log(typeof cats)
    if (!cats){
        console.log('cats vacio desde catbar')
    }else{
        console.log(JSON.stringify(cats))
        let bar = JSON.stringify(cats)
        
    }

    const [activeFilter, setActiveFilter] = useState('')
    
    // const opt = Object.keys(cats).map(index => {
    //     return <div>{index.nombre}</div>
    // })
    return (<div>hola</div>)

    // let style = 'CategoryButton'
    // if (cats.nombre === activeFilter) {
    //     style = 'CategoryButton CategoryButtonActive'}

    //     return <div>
    //         <button
    //             onClick={() => {
    //                 console.log(cats.nombre)
    //                 setActiveFilter(cats.nombre)
    //                 console.log(activeFilter)
    //             }}
    //             className={style}
    //         >
    //             {cats.nombre}
    //         </button>
    //     </div>
}

    export default CatBar;

// const CatBar = (cats) => {
//     // const [cats, setCats] = useState([]);
//      const [activeFilter, setActiveFilter] = useState('');

//     // useEffect(() => {
//     //     baul.getCats()
//     //     .then(cate => {
//     //         setCats(()=>{   
//     //             let randCate = [] 
//     //             for (let i=0; i<5; i++){
//     //                  randCate = cate.sort(()=> {return Math.random() - 0.5})
//     //             }
//     //             return randCate.slice(0,4)
//     //         })
//     //     })
//     //     .catch(e => console.log(e))

//     // },[])

//     return ( 
//         <div className="NavBar">
//             {cats.map(cats => {
//                 let style = 'CategoryButton'
//                 if(cats.nombre === activeFilter){
//                     style = 'CategoryButton CategoryButtonActive'
//                 }
//                 return <div>  
//                         <button 
//                             className={style} 
//                             onClick={() => {  
//                                 console.log(cats.nombre)                           
//                                 setActiveFilter(cats.nombre)
//                                 console.log(activeFilter)
//                             }}
//                         >
//                             {cats.nombre}
//                         </button>
//                         </div>
//             })}
//         </div>
//     )

// }

// export default CatBar;