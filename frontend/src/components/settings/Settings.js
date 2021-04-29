import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import GeneralForm from './GeneralForm';
import AccountForm from './AccountForm';
import PrivacyForm from './PrivacyForm';

const Settings = () => {
    const [currentSettings, setCurrentSettings] = useState('general');

    const handleClick = (form) => {
        setCurrentSettings(form);
    };

    return (
        <div className='settings-container'>
            <div className='settings-side-panel'>
                <div className='settings-panel-option' onClick={() => handleClick('general')}>General settings</div>
                <div className='settings-panel-option' onClick={() => handleClick('privacy')}>Privacy settings</div>
                <div className='settings-panel-option' onClick={() => handleClick('account')}>Account settings</div>
            </div>
            {currentSettings === 'account' ? <AccountForm /> : null}
            {currentSettings === 'general' ? <GeneralForm /> : null}
            {currentSettings === 'privacy' ? <PrivacyForm /> : null}
        </div>
    )
}

export default Settings;