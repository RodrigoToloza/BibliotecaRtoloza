import axios from 'axios';

export async function login (user) {
    try {
         const resp = await axios({
             method: 'post',
             url: 'http://localhost:3525/api/auth/login',
             data: user
         });  
         return resp.data 
         
    } catch (error){
        console.log(error)
    }
}

export async function getBook () {
    try {
        const resp = await axios('http://localhost:3525/api/books')
        return resp.data
    } catch (error) {
        console.log(error)
    }
}

export async function getCats () {
    try {
        const resp = await axios('http://localhost:3525/api/books/cats')
        return resp.data
    } catch (error) {
        console.log(error)
    }
}

export default { 
    login, 
    getBook,
    getCats
};