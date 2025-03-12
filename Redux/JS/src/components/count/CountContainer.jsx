import React, {createContext, useState} from 'react';
import CountDisplay from "./CountDisplay.jsx";
import CountMenu from "./CountMenu.jsx";
import {useSelector} from "react-redux";

export const CountContext = createContext()

function CountContainer() {

    const [count, setCount] = useState(1)

    const user = useSelector(state => state.login)

    const plus = () => {
        setCount(count + 1)
    }

    const obj = {count: count, plus: plus}


    return (
        <CountContext.Provider value={obj}>
            <div>
                Count Container <b>{user.uid}</b>

                <CountMenu></CountMenu>
                <CountDisplay></CountDisplay>

            </div>
        </CountContext.Provider>
    );
}

export default CountContainer;