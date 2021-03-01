import React from 'react';
import LoginModal from '../modals/LoginModal';
import { useSelector } from 'react-redux';

const NavBar = () => {
    const user = useSelector(state => state.session.user);

    return (
        <div className='navigation-bar'>
            {user === null ? <LoginModal /> : null}
        </div>
    )
}

export default NavBar;