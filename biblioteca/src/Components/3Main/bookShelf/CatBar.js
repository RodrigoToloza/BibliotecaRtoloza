import React, { useState, useEffect, useContext } from "react";
import { BooksContext } from "../../../context/BooksContext";

import { Link } from "react-router-dom";

import "../main.css";
import CardBook from "./CardBook";

/* const CatBar = ( cats ) => {
    console.log(typeof cats)
    if (!cats){
        console.log('cats vacio desde catbar')
    }else{
        console.log(JSON.stringify(cats))
        let bar = JSON.stringify(cats)
        
    }

    const [activeFilter, setActiveFilter] = useState('')
    
     const opt = cats.map(index => {
         return <div>{index.nombre}</div>
     })
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

    export default CatBar; */

const CatBar = () => {
  const { cats } = useContext(BooksContext);

  const [catsLocal, setCatsLocal] = useState([]);
  const [activeFilter, setActiveFilter] = useState("");

  useEffect(() => {
    const get = () => {
      let randCate = [];
      for (let i = 0; i < 5; i++) {
        randCate = cats.sort(() => {
          return Math.random() - 0.5;
        });
      }
      const catsRandomized = randCate.slice(0, 4);
      setCatsLocal(catsRandomized);
    };
    get();
  }, [cats]);
  return (
    <div className="NavBar">
      {catsLocal.map((cate) => {
        let style = "CategoryButton";
        if (cate.nombre === activeFilter) {
          style = "CategoryButton CategoryButtonActive";
        }
        return (
          <>
            <Link
              key={cate.codigo}
              className={style}
              onClick={() => {
                setActiveFilter(cate.nombre);
              }}
              to={cate.name}
            >
              {cate.nombre}
            </Link>
          </>
        );
      })}
    </div>
  );
};
export default CatBar;
