import React, { useState, useEffect } from "react";
import axios from "axios";
import "./headerStyle.css";

const Categorias = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    axios
      .get("http://77ff3d849ffd.ngrok.io/json")
      .then((res) => {
        setDatos(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="BrowseCategory">
      <select>
        <option value="" disabled selected>
          Categorias
        </option>
        {datos.map((item) => (
          <option value={item.nombre}>{item.nombre}</option>
        ))}
      </select>
    </div>
  );
};

export default Categorias;
