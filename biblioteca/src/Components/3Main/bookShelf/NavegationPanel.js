import React, { useState, useEffect, useContext } from "react";
import { BooksContext } from "../../../context/BooksContext";
import "../main.css";
import CatBar from "./CatBar";
//import CardBook from "./CardBook";
const NavegationPanel = () => {
  const { cats } = useContext(BooksContext);
  console.log(cats);

  return (
    <div>
      <CatBar />
    </div>
  );
};
export default NavegationPanel;
