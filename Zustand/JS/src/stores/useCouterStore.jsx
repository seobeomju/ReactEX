import {create} from "zustand";

const useCouterStore = create ( (set)=>({
    count:123,
    inc:(amount)=>set((state)=>{
        return {count: state.count + amount}
    }),
    dec:(amount)=>set((state)=>{
        return { count: state.count -amount}
    })
}))

export default useCouterStore