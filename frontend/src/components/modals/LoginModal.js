import React, { useState, useRef } from 'react';
import Login from '../loginComponents/Login';

const LoginModal = () => {
    const [display, setDisplay] = useState(false);
    const modalRef = useRef();

    const reveal = () => {
        setDisplay(true);
    }

    const hide = (e) => {
        if(e.target .classList.contains('modal-overlay')) setDisplay(false);
    }

    return (
        <div>
            <button onClick={reveal} className='login-nav-button'>Login</button>
            { display  ?
                <div className='modal-overlay' ref={modalRef} onClick={hide}>
                    <Login />
                </div>
            : null }
        </div>
    )
}

export default LoginModal;