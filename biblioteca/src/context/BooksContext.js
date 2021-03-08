import axios from "axios";
import { createContext, useEffect, useState } from "react";
import useCats from "../Hook/useCats";

export const BooksContext = createContext();

const BooksProvider = ({ children }) => {
  const [cats, setCats] = useState([]);

  console.log("CT");
  useEffect(() => {
    (async () => {
      let res = await axios(`${process.env.REACT_APP_API}/api/books/cats`);
      setCats(res.data);
    })();
  }, []);

  if (cats.length <= 0) return <p>Loading</p>;

  return (
    <BooksContext.Provider
      value={{
        cats,
        setCats,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export default BooksProvider;
