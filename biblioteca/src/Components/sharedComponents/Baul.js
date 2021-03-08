import axios from "axios";

export async function login(user) {
  try {
    const resp = await axios({
      method: "post",
      url: `${process.env.REACT_APP_API}/api/auth/login`,
      data: user,
    });
    return resp.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getBook() {
  try {
    const resp = await axios(`${process.env.REACT_APP_API}/api/books`);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getCats() {
  try {
    const resp = await axios(`${process.env.REACT_APP_API}/api/books/cats`);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
}
export async function getBestCat({ cat }) {
  try {
    const resp = await axios(
      `${process.env.REACT_APP_API}/api/books/getBestByCat/${cat}`
    );
    return resp.data;
  } catch (error) {
    console.log(error);
  }
}

let data = {
  login,
  getBook,
  getCats,
  getBestCat,
};

export default data;
