import React, { useState, useRef } from 'react';
import FindPeople from '../FindPeopleComponents/FindPeople'

const FindPeopleModal = ({props}) => {
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
            <div className='drop-down-button' onClick={reveal}>
                <i className="fas fa-user-plus"></i>
                    Add Friends
                <i className="fas fa-chevron-right"/>
            </div>
            {
                display ? 
                <div className='modal-overlay' ref={modalRef} onClick={hide}>
                    <FindPeople props={{childRef}} />
                </div>
                : null
            }
        </>
    )
}

export default FindPeopleModal