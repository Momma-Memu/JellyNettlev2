import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const PrivacyForm = () => {
    const profile = useSelector(state => state.profile);

    const [displayRealName, setDisplayRealName] = useState(null);
    const [gender, setGender] = useState(null);
    const [displayGroups, setDisplayGroups] = useState(null);
    const [displayFriends, setDisplayFriends] = useState(null);
    const [dob, setDob] = useState(null);
    const [whoCanFindMe, setWhoCanFindMe] = useState('');


    return (
        <form className='settings-form'>
            <span className='settings-explanation'>Choose to display your real name or your username</span>
            <label className='input-radio-labels'> 
                Real Name<input type='radio' name='display-name' className='radio-inputs' />
                Username<input type='radio' name='display-name' className='radio-inputs' />
            </label>
        </form>
    )
}

export default PrivacyForm;