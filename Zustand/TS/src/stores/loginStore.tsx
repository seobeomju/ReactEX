import {create} from "zustand";


export interface LoginState{
    user: string,
    login: (username: string) => void,
    logout: () => void
}

const useLoginStore
    = create<LoginState>(set =>({
        user: '',
        login: username => set(() => {
            console.log("username" + username   )
            return {user: username}
            }),
        logout: () =>{

        }
}))

export default useLoginStore