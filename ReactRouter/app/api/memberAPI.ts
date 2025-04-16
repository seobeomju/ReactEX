import axios from "axios";


const host = "http://localhost:8080/api/v1/member/login";

export const getToken = async (mid:String, mpw:String) =>{

    const header = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
     }

     const res = await axios.post(`${host}`,{mid,mpw},header);

     console.log(res.data);

     return res.data
}