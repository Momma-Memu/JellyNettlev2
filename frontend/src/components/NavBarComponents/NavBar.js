// import React, { useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import LoginModal from '../modals/LoginModal';
import { useSelector } from 'react-redux';
import Logout from './Logout';
import SignUpModal from '../modals/SignUpModal';

const NavBar = () => {
    const user = useSelector(state => state.session.user);
    // const history = useHistory();


    // useEffect(() => {
    //     if(user === null){
    //         history.push('/login')
    //     } else {
    //         history.push('/')
    //     }
    // }, [user, history])


    return (
        <div className='navigation-bar'>
            <div className='navbar-logo'></div>
            <div className='website-title'>JellyNettle</div>
            {user === null ? <SignUpModal /> : null}
            {user === null ? <LoginModal /> : <Logout />}
        </div>
    )
}

export default NavBar;