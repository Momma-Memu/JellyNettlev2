import React, { useState, useRef } from 'react';

const Modal = ({props}) => {
    // valid directions: top, left, right, bottom;
    // buttonClass is optional;
    const { size, direction, Component, buttonText, buttonClass } = props;
    const [display, setDisplay] = useState(false);
    const modalRef = useRef();
    const childRef = useRef();

    const reveal = () => {
        setDisplay(true);
    }

    const hide = (e) => {
        if(e.target.classList.contains('modal-overlay')){
            childRef.current.style[direction] = '-80%';
            setTimeout(() => {
                setDisplay(false);
            }, 400);
        }
    }

    const containerClass = size ? `modal-container-${size}` : 'modal-container';

    return (
        <>
            <button onClick={reveal} className={buttonClass ? buttonClass : 'login-nav-button'}>{buttonText}</button>
            { display ? <div className='modal-overlay' ref={modalRef} onClick={hide}>
                <div className={`${containerClass} modal-direction-${direction}`} ref={childRef}>
                    <Component props={{childRef}} />
                </div>
            </div> : null}
        </>
    )
}

export default Modal;