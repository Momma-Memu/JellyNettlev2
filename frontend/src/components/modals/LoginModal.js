import { useEffect } from 'react';
import React, { useState } from 'react';
import Login from '../loginComponents/Login';

const LoginModal = () => {
    const [display, setDisplay] = useState(false);


    const reveal = () => {
        setDisplay(true);
    }
    console.log(display)

    const hide = () => {
        setDisplay(false);
    }

    return (
        <div onClick={hide}>
            <button onClick={reveal} className='login-nav-button'>Login</button>
            { display  ?
                <div className='modal-overlay'>
                    <Login />
                </div>
            : null }
        </div>
    )
}

export default LoginModal;