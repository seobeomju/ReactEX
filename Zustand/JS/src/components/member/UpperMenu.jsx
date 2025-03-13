import React from 'react';
import useLoginStore from "../../stores/useLoginStore.jsx";

function UpperMenu() {

    const {user} =useLoginStore()

    return (
        <div>
            <hr/>
            <h2>UID: {user.uid}</h2>
            <h2>NICKNAME: {user.nickname}</h2>

            {user.uid && <button onClick={logout}>LOGOUT</button>}

            <hr/>
            <hr/>
        </div>
    );
}

export default UpperMenu;