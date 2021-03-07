import axios from "axios";
import { useEffect, useState } from "react";

const useCats = () => {
  const [response, setResponse] = useState([]);
  useEffect(() => {
    (async () => {
      let res = await axios(`${process.env.REACT_APP_API}/api/books/cats`);
      console.log(res);
    })();
  }, []);
  return {
    response,
  };
};

export default useCats;
