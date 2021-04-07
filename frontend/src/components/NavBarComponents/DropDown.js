import { useRef } from 'react';
// import { NavLink } from 'react-router-dom';

const DropDown = ({props}) => {
    const menuRef = useRef();
    console.log(menuRef)

    const openMenu = () => {
        let showing;
        if(menuRef) {
            showing = menuRef.current.style.height;
            if(!showing || showing === '0px'){
                menuRef.current.style.height = '400px';
                menuRef.current.style.boxShadow = '4px 3px 3px 1px rgba(148, 148, 148, 0.308)';
            } else {
                menuRef.current.style.height = '0px'
                menuRef.current.style.boxShadow = 'none';
            }
        };   
    };

    return (

        <>
            <i className="fas fa-bars drop-down-icon" onClick={openMenu} />
            <div className='drop-down-menu-container' ref={menuRef}>

            </div>
        </>
    )
}

export default DropDown;