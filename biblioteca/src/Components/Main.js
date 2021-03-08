import React from "react";
import Header from "./1Header/Header";
import Libro from "./sharedComponents/Libro";
import Carrusel from "./2Carrusel/Carrusel";
import MrMain from "./3Main/Main";

const Main = () => {
  return (
    <div>
      <Header />
      <Carrusel />
      <MrMain />
    </div>
  );
};

export default Main;
