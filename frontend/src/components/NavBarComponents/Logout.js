import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';

const Logout = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const logMeOut = () => {
        dispatch(logout());
        history.push('/login');
    }

    return(
        <button className='logout-button' onClick={logMeOut}>Logout</button>
    )
}

export default Logout;