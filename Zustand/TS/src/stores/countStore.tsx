import {create} from "zustand";

export interface CountState{
    num:number,
    inc: () => void
}

const useCountStore =
    create<CountState>((set)=>({
        num:0,
        inc: () => set((state) => {
            console.log(state)
            return {num: state.num+1}
        })
    }))

export default useCountStore