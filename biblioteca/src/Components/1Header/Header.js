import React from "react";
import Buscar from "./BuscarLibro";
import Titulo from "./Titulo";
import Usuario from "./Usuario";
import Menu from "./Menu";
import Categorias from "./Categorias";
import "./headerStyle.css";

class Header extends React.Component {
  render() {
    return (
      <header>
        <Categorias />
        <Buscar />
        <Titulo />
        <Usuario />
        <Menu />
      </header>
    );
  }
}

export default Header;
