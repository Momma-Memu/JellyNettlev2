import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { getProfile } from '../../store/profile';
import { getPrivacy } from '../../store/privacy';


const PrivacyRedirect = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    
    const redirectUser = async (choice) => {
        const data = await dispatch(getProfile(user.id));
        dispatch(getPrivacy(data.id));
        
        if(choice === 'yes'){
            history.push('/settings')
        } else {
            history.push('/')
        }
    }

    return (
        <div className='notification-form'>
            <div className='notification-header'>Would you like to now update your privacy settings?</div>
            <div className='notification-button-container'>
                <div onClick={() => redirectUser('yes')} className='choice-button'>Yes, let's go.</div>
                <div onClick={() => redirectUser('no')} className='choice-button'>Maybe later.</div>
            </div>
        </div>
    )
}

export default PrivacyRedirect;