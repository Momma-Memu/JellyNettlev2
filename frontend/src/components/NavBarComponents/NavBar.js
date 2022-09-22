import LoginModal from '../modals/LoginModal';
import { useSelector, useDispatch } from 'react-redux';
import SignUpModal from '../modals/SignUpModal';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { getProfile } from '../../store/profile';
import DropDown from './DropDown';
import { getPrivacy } from '../../store/privacy'
import { getRequests } from '../../store/friends';
import Modal from '../modals/Modal';
import Login from '../loginComponents/Login';

const NavBar = () => {
    const user = useSelector(state => state.session.user);
    const profile = useSelector(state => state.profile);
    const dispatch = useDispatch();

    useEffect(() => {
        if(user){
            dispatch(getProfile(user.id));
            dispatch(getRequests(user.id));
        };

    },[dispatch, user])

    useEffect(() => {
        if(profile){
            dispatch(getPrivacy(profile.id))
        }
    }, [dispatch, profile])


    return (
        <div className='navigation-bar'>
            <Link to='/'>
                <div className='navbar-logo' />
            </Link>
            <div className='website-title'>JellyNettle</div>
            {/* {user && !profile ? <div className='profile-builder-button'>Profile Build</div> : null} */}
            {user === null ? <SignUpModal /> : null}
            {user === null ? 
            <Modal props={{ size: '', direction: 'left', Component: Login, buttonText: 'Login' }} />
             : <DropDown props={profile} />}
        </div>
    )
}

export default NavBar;