import React from 'react';
import { useHistory } from 'react-router-dom';
import LoginModal from '../modals/LoginModal';
import { useSelector } from 'react-redux';

const NavBar = () => {
    const user = useSelector(state => state.session.user);
    const history = useHistory();

    if(user === null){
        history.push('/login')
    }


    return (
        <div className='navigation-bar'>
            {user === null ? <LoginModal /> : null}
        </div>
    )
}

export default NavBar;