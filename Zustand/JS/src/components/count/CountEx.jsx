import React from 'react';
import useCouterStore from "../../stores/useCouterStore.jsx";

function CountEx() {
    const {count, inc,dec} = useCouterStore()

    return (
        <div>
            <h1>Count2 Ex</h1>
            <h1>COUNT: {count} </h1>
            <div>
                <button onClick={inc}>PLUS</button>
                <button onClick={dec}>MINUS</button>
            </div>
        </div>
    );
}

export default CountEx;