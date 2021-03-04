import React, { useState, useRef } from 'react';
import Login from '../loginComponents/Login';

const SignUpModal = () => {
    const [display, setDisplay] = useState(false);
    const modalRef = useRef();

    const reveal = () => {
        setDisplay(true);
    }

    const hide = (e) => {
        if(e.target.classList.contains('modal-overlay')) setDisplay(false);
    }

    return (
        <>
            <button onClick={reveal} className='login-nav-button'>Sign Up</button>
            { display  ?
                <div className='modal-overlay' ref={modalRef} onClick={hide}>
                    <Login />
                </div>
            : null }
        </>
    )
}

export default SignUpModal;