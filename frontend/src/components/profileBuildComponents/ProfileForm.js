import { useState, useEffect } from 'react';

const ProfileForm = ({props}) => {
    const childRef = props;
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('Female');
    const [dob, setDob] = useState('')
    const [platform, setPlatform] = useState('');
    const [introduction, setIntroduction] = useState('');
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        const newErrors = [];
        e.preventDefault();
        if(firstName.length <= 1) newErrors.push('Must provide a valid first name.');
        if(lastName.length <= 1) newErrors.push('Must provide a valid last name.');

        const today = new Date();
        const rawDOB = dob.split('-');
        const jsDOB = new Date(rawDOB[0], (rawDOB[1] - 1), rawDOB[2]);
        const days = Math.abs(today - jsDOB) / (1000 * 3600 * 24);

        if(days < 6574.36) newErrors.push('Users must be 18 years or older.');
        if(dob.length < 1) newErrors.push('Must provide valid date of birth.')

        setErrors(newErrors);
        
        if(newErrors.length === 0){
            // do the thunk
        }
    }

    useEffect(() => {
        if(childRef){
            childRef.current.style.left = '3%'
        }
    },[childRef, errors])

    return (
        <form onSubmit={(e) => handleSubmit(e)} className='profile-build-form' ref={childRef}>
            <ul>
                {errors.map(error => <li className='form-headers'>{error}</li>)}
            </ul>
            <label className='input-labels'> First Name
                <input type='text' className='input-field' value={firstName} onChange={e => setFirstName(e.target.value)}/>
            </label>
            <label className='input-labels'> Last Name
                <input type='text' className='input-field' value={lastName} onChange={e => setLastName(e.target.value)}/>
            </label>
            <label className='input-labels'> Gender
                <select name='genders' className='select-field' value={gender} onChange={e => setGender(e.target.value)}>
                    <option value='Female'>Female</option>
                    <option value='Male'>Male</option>
                    <option value='Non Binary'>Non Binary</option>
                    <option value='Other'>Other</option>
                    <option value='Prefer not to say'>Prefer not to say</option>
                </select>
            </label>
            <label className='input-labels'> Date of Birth
                <input className='input-date' type='date' value={dob} onChange={e => setDob(e.target.value)}/>
            </label>
            <label className='input-labels'> Favorite Platform
                <select name='platforms' className='select-field' value={platform} onChange={e => setPlatform(e.target.value)}>
                    <option value='PC'>PC</option>
                    <option value='Playstation'>Playstation</option>
                    <option value='Retro'>Retro</option>
                    <option value='VR'>VR</option>
                    <option value='Xbox'>Xbox</option>
                    <option value='Other'>Other</option>
                </select>
            </label>
            <label className='input-labels'> Introduction
                <textarea className='input-field' style={{height: '50px', resize: 'none'}} value={introduction} onChange={e => setIntroduction(e.target.value)}/>
            </label>
            <button type='submit' className='login-button'>Submit</button>
        </form>
    )
}

export default ProfileForm;