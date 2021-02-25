import axios from 'axios';

export async function getCats (user) {
    try {
         const resp = await axios({
             method: 'post',
             url: 'http://localhost:3525/api/auth/login',
             data: user
         });  
         console.log(resp.data)
        return resp.data;   
         
    } catch (error){
        console.log(error)
    }
}

export default getCats;