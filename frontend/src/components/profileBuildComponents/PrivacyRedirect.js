import { useHistory } from 'react-router-dom';

const PrivacyRedirect = () => {
    const history = useHistory();
    
    const redirectUser = (choice) => {
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