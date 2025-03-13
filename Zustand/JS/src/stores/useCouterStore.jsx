import {create} from "zustand";

const useCouterStore = create ( (set)=>({
    count:123,
    inc:()=>set((state)=>{
        return {count: state.count + 1}
    }),
    dec:()=>set((state)=>{
        return { count: state.count -1}
    })
}))

export default useCouterStore