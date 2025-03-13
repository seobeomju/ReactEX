import {create} from "zustand/react.js";

const useCouterStore = create ( (set)=>({
    count:123,
    inc:()=>set((state)=>{
        return {count: state.count + 1}
    })
}))

export default useCouterStore