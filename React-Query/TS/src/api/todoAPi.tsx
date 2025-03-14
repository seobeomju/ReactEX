import axios from "axios";


export async function getTodoList(){

    const res = await axios.get('http://122.34.51.94:8090/api/todo/list')

    return res.data
}