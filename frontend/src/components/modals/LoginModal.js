import React, { useState, useRef, Children } from 'react';
import Login from '../loginComponents/Login';

const LoginModal = () => {
    const [display, setDisplay] = useState(false);
    const modalRef = useRef();
    const childRef = useRef();

    const reveal = () => {
        setDisplay(true);
    }

    const hide = (e) => {
        childRef.current.style.left = '-80%';
        setTimeout(() => {
            if(e.target.classList.contains('modal-overlay')) setDisplay(false);
        }, 400);
    }

    return (
        <>
            <button onClick={reveal} className='login-nav-button'>Login</button>
            { display  ?
                <div className='modal-overlay' ref={modalRef} onClick={hide}>
                    <Login prop={childRef} />
                </div>
            : null }
        </>
    )
}

export default LoginModal;