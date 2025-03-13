import {create} from "zustand";

interface CountState{
    num:number,
    inc: () => void
}

const useCountStore =
    create<CountState>((set)=>({

    }))

export default useCountStore