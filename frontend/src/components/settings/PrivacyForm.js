import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePrivacy } from '../../store/privacy';

const PrivacyForm = () => {
    const privacy = useSelector(state => state.privacy);
    const dispatch = useDispatch();
    const [saved, setSaved] = useState(false)
    const [displayRealName, setDisplayRealName] = useState(null);
    const [gender, setGender] = useState(null);
    const [displayGroups, setDisplayGroups] = useState(null);
    const [displayFriends, setDisplayFriends] = useState(null);
    const [dob, setDob] = useState(null);
    const [whoCanFindMe, setWhoCanFindMe] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = { id: privacy.id }
        if(displayRealName !== null) data.displayRealName = displayRealName;
        if(whoCanFindMe !== '') data.whoCanFindMe = whoCanFindMe;
        if(dob !== null) data.dob = dob;
        if(displayGroups !== null) data.displayGroups = displayGroups;
        if(displayFriends !== null) data.displayFriends = displayFriends;
        if(gender !== null) data.gender = gender;

        const resData = await dispatch(updatePrivacy(data))
        if(resData) setSaved(true);
    }

    return (
        <form onSubmit={handleSubmit} className='settings-form-privacy'>
            {saved ? <div className='changes-saved'>Changes saved.</div> : null}
            <span className='settings-explanation'>Display your real name or your username</span>
            <label className='input-radio-labels'> 
                Real Name<input type='radio' name='display-name' className='radio-inputs' onChange={() => setDisplayRealName(true)}/>
                Username<input type='radio' name='display-name' className='radio-inputs'  onChange={() => setDisplayRealName(false)}/>
            </label>
            <span className='settings-explanation'>Display the groups you are in on your profile</span>
            <label className='input-radio-labels'>
                Yes<input type='radio' name='display-groups' className='radio-inputs' onChange={() => setDisplayGroups(true)} />
                No<input type='radio' name='display-groups' className='radio-inputs' onChange={() => setDisplayGroups(false)} />
            </label>
            <span className='settings-explanation'>Display the who you are friends with on your profile</span>
            <label className='input-radio-labels'>
                Yes<input type='radio' name='display-friends' className='radio-inputs' onChange={() => setDisplayFriends(true)} />
                No<input type='radio' name='display-friends' className='radio-inputs' onChange={() => setDisplayFriends(false)} />
            </label>
            <span className='settings-explanation'>Display your date of birth on your profile</span>
            <label className='input-radio-labels'>
                Yes<input type='radio' name='display-dob' className='radio-inputs' onChange={() => setDob(true)} />
                No<input type='radio' name='display-dob' className='radio-inputs' onChange={() => setDob(false)} />
            </label>
            <span className='settings-explanation'>Display your gender on your profile</span>
            <label className='input-radio-labels'>
                Yes<input type='radio' name='display-gender' className='radio-inputs' onChange={() => setGender(true)} />
                No<input type='radio' name='display-gender' className='radio-inputs' onChange={() => setGender(false)} />
            </label>
            <span className='settings-explanation'>Choose who is allowed to friend you</span>
            <label className='input-radio-labels'>
                Anyone<input type='radio' name='friends-settings' className='radio-inputs' onChange={() => setWhoCanFindMe('anyone')} />
                Friends of friends<input type='radio' name='friends-settings' className='radio-inputs' onChange={() => setWhoCanFindMe('friends of friends')} />
            </label>
            <button type='submit' className='login-button'>Submit</button>
        </form>
    )
}

export default PrivacyForm;