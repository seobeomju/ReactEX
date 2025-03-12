import {configureStore} from "@reduxjs/toolkit";
import countSlice from "./slices/countSlice.jsx";
import loginSlice from "./slices/loginSlice.jsx";


const store = configureStore({
    reducer: {
        counter: countSlice,
        login: loginSlice
    }
})

export default store