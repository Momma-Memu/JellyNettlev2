import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import GeneralForm from './GeneralForm';
import AccountForm from './AccountForm';
import PrivacyForm from './PrivacyForm';
import Current from './Current';


const Settings = () => {
    const [currentSettings, setCurrentSettings] = useState('general');
    // const user = useSelector(state => state.session.user);
    const profile = useSelector(state => state.profile);
    const privacy = useSelector(state => state.privacy);

    const handleClick = (form) => {
        setCurrentSettings(form);
    };

    if(!profile || !privacy) return (
        <div className='notification-form'>
            <span className='notification-header'>You haven't setup your profile yet, do you want to do that now?</span>
            <Link to='/profile/builder'>
                <button className='choice-button'>Let's go!</button> 
            </Link>
        </div>
    );

    return (
        <div className='settings-container'>
            <div className='settings-side-panel'>
                <div className='settings-panel-option' onClick={() => handleClick('general')}>General settings</div>
                <div className='settings-panel-option' onClick={() => handleClick('privacy')}>Privacy settings</div>
                <div className='settings-panel-option' onClick={() => handleClick('account')}>Account settings</div>
            </div>

            <Current setting={currentSettings} />

            {currentSettings === 'account' ? <AccountForm /> : null}
            {currentSettings === 'general' ? <GeneralForm /> : null}
            {currentSettings === 'privacy' ? <PrivacyForm /> : null}
        </div>
    )
}

export default Settings;