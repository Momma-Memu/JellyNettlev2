import LoginModal from '../modals/LoginModal';
import { useSelector } from 'react-redux';
import Logout from './Logout';
import SignUpModal from '../modals/SignUpModal';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const user = useSelector(state => state.session.user);

    return (
        <div className='navigation-bar'>
            <Link to='/'>
                <div className='navbar-logo' />
            </Link>
            <div className='website-title'>JellyNettle</div>
            {user === null ? <SignUpModal /> : null}
            {user === null ? <LoginModal /> : <Logout />}
        </div>
    )
}

export default NavBar;