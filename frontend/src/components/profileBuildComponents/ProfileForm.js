import { useState, useEffect, useRef } from 'react';
import { buildProfile } from '../../store/profile';
import { useDispatch, useSelector } from 'react-redux';
import { set } from 'js-cookie';

const ProfileForm = ({props}) => {
    const { childRef, setPrivacy } = props;
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('Female');
    const [platform, setPlatform] = useState('PC');
    const [introduction, setIntroduction] = useState('');
    const [image, setImage] = useState(null)
    const [errors, setErrors] = useState([]);
    const uploadRef = useRef();
    const savedDiv = useRef();

    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        const newErrors = [];
        e.preventDefault();
        if(firstName.length <= 1) newErrors.push('Must provide a valid first name.');
        if(lastName.length <= 1) newErrors.push('Must provide a valid last name.');

        setErrors(newErrors);
        
        if(newErrors.length === 0){
            const userId = user.id
            const data = {firstName, lastName, gender, favoriteConsole:platform, introduction, userId, image};
            dispatch(buildProfile(data))
            // childRef.current.style.left = '-80%'
            // setPrivacy(true);
        }
    }
    useEffect(() => {
        if(childRef){
            if(childRef.current.style.left){
                return;
            }
            childRef.current.style.left = '3%'
        }
    },[childRef, errors])

    // useEffect(() => {
    //     if(savedDiv.current) savedDiv.current.style.opacity = 1;
    // },[savedDiv])
    

    const handleSaveImage = (e) => {
        setImage(e.target.files[0]);
        uploadRef.current.style.opacity = 0;
        savedDiv.current.style.opacity = 1;
    }

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
            <label className='input-labels'>Profile Picture
                <label className='input-file-field' htmlFor='upload' ref={uploadRef}> Upload
                    <input hidden type='file' id='upload' onChange={handleSaveImage}/>
                </label>
                <div className='saved-image' ref={savedDiv}>Saved</div>
            </label>
            <button type='submit' className='login-button'>Submit</button>
        </form>
    )
}

export default ProfileForm;