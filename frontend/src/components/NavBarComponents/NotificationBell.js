import React, { useState, useRef, useEffect } from 'react';
import Notifications from './Notifications';
import { useSelector } from 'react-redux';

const NotificationBell = ({props}) => {
    const menuRef = useRef();
    const buttonRef = useRef();

    const openCloseMenu = () => {
        let showing;
        if (menuRef) {
            showing = menuRef.current.style.top;
            if (!showing || showing === '-460px') {
                menuRef.current.style.top = '55px';
                menuRef.current.style.boxShadow = '4px 3px 3px 1px rgba(148, 148, 148, 0.308)';
            } else {
                menuRef.current.style.top = '-460px'
                menuRef.current.style.boxShadow = 'none';
            }
        };   
    };


    const shouldClose = (event) => {
        return (
            menuRef.current && 
            buttonRef.current &&
            !menuRef.current.contains(event.target) &&
            !buttonRef.current.contains(event.target)
        );
    }

    useEffect(() => {
        // UseEffect containing the logic that closes the modal when clicking outside of it. 
        function handleClickOutside(event) {
            const showing = menuRef.current.style.top;
            if (shouldClose(event)) {
                menuRef.current.style.top = '-460px'
                menuRef.current.style.boxShadow = 'none';
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          // Unbind the event listener on clean up
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [menuRef]);

    return (
        <>
            <div className='flex-horizon clickable' onClick={openCloseMenu}>
                <i className="fa fa-bell-o mr-4 fcol-jn-dark fsize-3" ref={buttonRef} aria-hidden="true"></i>
                <div className='bell-icon-badge fweight-7 fcol-white fsize-0'><span>99+</span></div>
            </div>
            <Notifications props={{menuRef}} />
        </>
    )
}

export default NotificationBell;