import { useState } from 'react';
import GeneralForm from './GeneralForm';
import AccountForm from './AccountForm';
import PrivacyForm from './PrivacyForm';
import Current from './Current';


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

            <Current setting={currentSettings} />

            {currentSettings === 'account' ? <AccountForm /> : null}
            {currentSettings === 'general' ? <GeneralForm /> : null}
            {currentSettings === 'privacy' ? <PrivacyForm /> : null}
        </div>
    )
}

export default Settings;