import React, { Component } from "react";
import BookShelf from "./bookShelf/BookShelf";

const Main = () => {
  console.log("MAIN");

  return (
    <div className="Main">
      <BookShelf />
    </div>
  );
};

export default Main;
