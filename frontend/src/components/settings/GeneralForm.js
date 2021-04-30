import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../store/session';

const GeneralForm = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [headers, setHeaders] = useState([]);
    const [saved, setSaved] = useState(false)
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formErrors = [];
        const data = {
            id: user.id,
        };

        if(userName.length > 1){
            if(userName.length < 4){
                formErrors.push('Please provide a username with at least 4 characters.');
            } else if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(userName)){
                formErrors.push('Username cannot be an email, or your current email.');
            } else {
                data.username = userName
            }
        };


        if(email.length > 1) {
            if(!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))){
                formErrors.push('Please provide a valid email.');
            } else {
                data.email = email;
            };
        };

        if(password.length > 1){
            if(password.length < 6){
                formErrors.push('Password must be 6 characters or more.');
            } else if(password !== confirmPassword) {
                formErrors.push('Password and Confirm Password must match exactly.');
            } else {
                data.password = password;
            };
        };

        if(formErrors.length === 0){
                const info = await dispatch(updateUser(data))
                .catch(async (res) => {
                    const data = await res.json()
                    const errors = data.errors.filter(el => el !== 'Invalid value');
                    if(data && data.errors) setHeaders([...errors, ...formErrors]);
                });
                if(info){
                    setSaved(true)
                }
        } else {
            setHeaders(formErrors);
        }
    }

    const badUpdateMessages = headers.map((el, i) => <li key={i} className='form-headers'>{el}</li>)
    return (
        <form className='settings-form' onSubmit={e => handleSubmit(e)}>
            <ul>{badUpdateMessages}</ul>
            {saved ? <div className='changes-saved'>Changes saved.</div> : null}
            <label className='input-labels'>New Username
                <input type='text' value={userName} onChange={e => setUserName(e.target.value)} className='input-field'/>
            </label>
            <label className='input-labels'>New Email
                <input type='text' value={email} onChange={e => setEmail(e.target.value)} className='input-field'/>
            </label>
            <label className='input-labels'>New Password
                <input type='password' value={password} onChange={e => setPassword(e.target.value)} className='input-field'/>
            </label>
            <label className='input-labels'>Confirm New Password
                <input type='password' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} className='input-field'/>
            </label>
            <button type='submit' onSubmit={e => handleSubmit(e)} className='login-button'>Submit</button>
        </form>
    )
}

export default GeneralForm;