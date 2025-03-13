import React, {useState} from 'react';

function LoginComponent() {

    const [text, setText] = useState()
    
    return (
        <div>
            <hr/>
            <input type={'text'} value={text} onChange={e=>{
                setText(e.target.value)
            }}/>
            <button>LOGIN</button>
        </div>
    );
}

export default LoginComponent;