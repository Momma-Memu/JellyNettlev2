import React from 'react';
import { useHistory } from 'react-router-dom';
import LoginModal from '../modals/LoginModal';
import { useSelector } from 'react-redux';
import Logout from './Logout';

const NavBar = () => {
    const user = useSelector(state => state.session.user);
    const history = useHistory();

    if(user === null){
        history.push('/login')
    }


    return (
        <div className='navigation-bar'>
            <div className='navbar-logo'></div>
            <div className='website-title'>JellyNettle</div>
            {user === null ? <LoginModal /> : <Logout />}
        </div>
    )
}

export default NavBar;