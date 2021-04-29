import { useRef } from 'react';
import { Link, useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';

const DropDown = ({props}) => {
    const profile = props;

    const menuRef = useRef();
    const dispatch = useDispatch();
    const history = useHistory();
    const handleLogout = () => {
        dispatch(logout());
        history.push('/login');
    }

    const openMenu = () => {
        let showing;
        if(menuRef) {
            showing = menuRef.current.style.top;
            if(!showing || showing === '-260%'){
                menuRef.current.style.top = '260%';
                menuRef.current.style.boxShadow = '4px 3px 3px 1px rgba(148, 148, 148, 0.308)';
            } else {
                menuRef.current.style.top = '-260%'
                menuRef.current.style.boxShadow = 'none';
            }
        };   
    };

    return (

        <>
            <div className='drop-down-menu-container' ref={menuRef}>
                {!profile ? 
                <Link className='drop-down-button' to='/profile/builder' onClick={openMenu}>
                    <i className="fas fa-tools"/>
                        Set up your profile
                    <i className="fas fa-chevron-right"/>
                </Link> 
                : null}
                <Link className='drop-down-button' to='/settings' onClick={openMenu}>
                    <i className="fas fa-user-cog"/>
                        Settings
                    <i className="fas fa-chevron-right"/>
                </Link>
                <div className='drop-down-button' onClick={handleLogout}>
                    <i className="fas fa-door-open"/>
                        Logout
                    <i className="fas fa-chevron-right"/>
                </div>
            </div>
            <i className="fas fa-bars drop-down-icon" onClick={openMenu} />
        </>
    )
}

export default DropDown;