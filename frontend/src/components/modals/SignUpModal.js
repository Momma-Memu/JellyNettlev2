import React, { useState, useRef } from 'react';
import SignUp from '../loginComponents/SignUp';

const SignUpModal = () => {
    const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const [display, setDisplay] = useState(false);
    const modalRef = useRef();
    const childRef = useRef();
    let position = '25%';

    const reveal = () => {
        setDisplay(true);
    }


    if (width <= 750 && width > 599) {
        position = '18%';
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