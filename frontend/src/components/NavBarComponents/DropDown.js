import { useRef, useEffect } from 'react';
import { Link, useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import { useSelector } from 'react-redux';
import FindPeopleModal from '../modals/FindPeopleModal';
import NotificationBell from './NotificationBell';

const DropDown = ({props}) => {
    const profile = props;
    const user = useSelector(state => state.session.user)
    const menuRef = useRef();
    const buttonRef = useRef();
    const dispatch = useDispatch();
    const history = useHistory();
    const handleLogout = () => {
        dispatch(logout());
        history.push('/login');
    }

    const openCloseMenu = () => {
        let showing;
        if (menuRef) {
            showing = menuRef.current.style.top;
            if (!showing || showing === '-260%') {
                menuRef.current.style.top = '260%';
                menuRef.current.style.boxShadow = '4px 3px 3px 1px rgba(148, 148, 148, 0.308)';
            } else {
                menuRef.current.style.top = '-260%'
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
                menuRef.current.style.top = '-260%'
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
            <div className='drop-down-menu-container' ref={menuRef}>
                {!profile ? 
                <Link className='drop-down-button' to='/profile/builder' onClick={openCloseMenu}>
                    <i className="fas fa-tools"/>
                        Set up your profile
                    <i className="fas fa-chevron-right"/>
                </Link> 
                : null}
                <Link className='drop-down-button' to={`/profile/${user.username}`} onClick={openCloseMenu}>
                    <i className="fas fa-user"/>
                        Profile
                    <i className="fas fa-chevron-right"/>
                </Link>
                <Link className='drop-down-button' to='/settings' onClick={openCloseMenu}>
                    <i className="fas fa-user-cog"/>
                        Settings
                    <i className="fas fa-chevron-right"/>
                </Link>
                <FindPeopleModal />
                <div className='drop-down-button' onClick={handleLogout}>
                    <i className="fas fa-door-open"/>
                        Logout
                    <i className="fas fa-chevron-right"/>
                </div>
            </div>
            <NotificationBell user={user} />
            <i ref={buttonRef} className="fas fa-bars drop-down-icon" onClick={openCloseMenu} />
        </>
    )
}

export default DropDown;