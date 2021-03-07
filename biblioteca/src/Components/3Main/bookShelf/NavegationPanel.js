import React, { useState, useEffect } from "react";
import "../main.css";
import CatBar from "./CatBar";
import CardBook from "./CardBook";
import baul from "../../sharedComponents/Baul";

const NavegationPanel = () => {
  const [cats, setCats] = useState();

  useEffect(() => {
    function getCats(){
      baul
        .getCats()
        .then((cate) => {
          setCats(() => {
            console.log('llenando cats...')
            let randCate = [];
            randCate = cate.sort(() => {
              return Math.random() - 0.5;
            });

            return randCate.slice(0, 4);
          });
        })
        .catch((e) => console.log(e));
    }
    if (!cats) {
      getCats();
    }else{
      console.log('vacio')
    }
  }, [cats]);
  return (
    <div>
      <CatBar categorias={cats} />
    </div>
  );
};
export default NavegationPanel;

// const NavegationPanel = () => {
//     const [cats, setCats] = useState([]);

//     useEffect(() => {
//         baul.getCats()
//         .then(cate => {
//             setCats(()=>{
//                 let randCate = []
//                 for (let i=0; i<5; i++){
//                      randCate = cate.sort(()=> {return Math.random() - 0.5})
//                 }
//                 return randCate.slice(0,4)
//             })
//         })
//         .catch(e => console.log(e))

//     },[])

//     return (
//         <div className="NavigationPanel">
//             <CatBar cat={cats}/>
//             <div className="Books">
//                 <CardBook cat={cats} />
//             </div>

//         </div>
//     )
// }

// export default NavegationPanel
