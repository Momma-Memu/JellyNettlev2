import LoginModal from '../modals/LoginModal';
import { useSelector, useDispatch } from 'react-redux';
import Logout from './Logout';
import SignUpModal from '../modals/SignUpModal';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { getProfile } from '../../store/profile';
import DropDown from './DropDown';

const NavBar = () => {
    const user = useSelector(state => state.session.user);
    const profile = useSelector(state => state.profile.profile);
    const dispatch = useDispatch();

    useEffect(() => {
        if(user){
            dispatch(getProfile(user.id))
        };

    },[dispatch])

    return (
        <div className='navigation-bar'>
            <Link to='/'>
                <div className='navbar-logo' />
            </Link>
            <div className='website-title'>JellyNettle</div>
            {/* {user && !profile ? <div className='profile-builder-button'>Profile Build</div> : null} */}
            {user === null ? <SignUpModal /> : null}
            {user === null ? <LoginModal /> : <DropDown />}
        </div>
    )
}

export default NavBar;