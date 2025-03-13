import {create} from "zustand";

const useLoginStore=create((set)=>({
    user: {uid:'',nickname:''},
    login:()=>set((state)=>{
        console.log("login....")
        return state
    })
}))

export default useLoginStore