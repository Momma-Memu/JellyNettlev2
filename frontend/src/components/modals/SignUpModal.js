import React, { useState, useRef } from 'react';
import SignUp from '../loginComponents/SignUp';

const SignUpModal = () => {
    const [display, setDisplay] = useState(false);
    const modalRef = useRef();
    const childRef = useRef();
    let position = `calc(50% - 250px)`;

    const reveal = () => {
        setDisplay(true);
    }

    const hide = (e) => {
        if(e.target.classList.contains('modal-overlay')){
            childRef.current.style.left = '-80%';
            setTimeout(() => {
                setDisplay(false);
            }, 400);
        }
    }

    return (
        <>
            <button onClick={reveal} className='sign-up-nav-button'>Sign Up</button>
            { display  ?
                <div className='modal-overlay' ref={modalRef} onClick={hide}>
                    <SignUp props={{childRef, position, scrollVal: null}} />
                </div>
            : null }
        </>
    )
}

export default SignUpModal;