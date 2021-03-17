import React, { useState, useRef } from 'react';
import SignUp from '../loginComponents/SignUp';

const SignUpModal = () => {
    const [display, setDisplay] = useState(false);
    const modalRef = useRef();
    const childRef = useRef();

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
                    <SignUp props={{childRef}} />
                </div>
            : null }
        </>
    )
}

export default SignUpModal;