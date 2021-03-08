import React, { useEffect, useState } from "react";
import axios from "axios";
import Carrusel from "../2Carrusel/Carrusel";

const Libro = () => {
  const [book, setLibro] = useState([]);
  useEffect(() => {
    axios(`${process.env.REACT_APP_API}/api/books`)
      .then((res) => {
        setLibro(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <div>{<Carrusel book={book} />}</div>;
};

export default Libro;
