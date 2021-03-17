import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../../store/session';

const SignUp = ({props}) => {
    const [userName, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [headers, setHeaders] = useState([]);
    const dispatch = useDispatch();
    const slideRef = props.childRef;
    console.log(slideRef)

    useEffect(() => {
        if(props.position){
            slideRef.current.style.left = props.position;
        } else {
            slideRef.current.style.left = '25%';
        }
    }, [slideRef])

    const handleSubmit = (e) => {
        if(confirmPassword !== password){
            setHeaders(['Passwords do not match.'])
            return;
        }
        e.preventDefault();
        dispatch(signUp(password, email, userName))
            .catch(async (res) => {
                const data = await res.json()
                if(data && data.errors) setHeaders(data.errors.filter(el => el !== 'Invalid value'))
                console.log(data);
            })
    };

    const updateUsername = e => setUsername(e.target.value);
    const updateEmail = e => setEmail(e.target.value);
    const updatePassword = e => setPassword(e.target.value);
    const updateConfirmPassword = e => setConfirmPassword(e.target.value);

    const badSignUpMessages = headers.map((el, i) => <li key={i} className='form-headers'>{el}</li>)

    return (
        <form onSubmit={handleSubmit} className='sign-up-container' ref={slideRef}>
            <div className='logo-div'></div>
            <ul>{badSignUpMessages}</ul>
            <label className='input-labels'> Username
                <input type='text' value={userName} onChange={updateUsername} className='input-field'/>
            </label>
            <label className='input-labels'> Email
                <input type='text' value={email} onChange={updateEmail} className='input-field'/>
            </label>
            <label className='input-labels'>Password
                <input type='password' value={password} onChange={updatePassword} className='input-field'/>
            </label>
            <label className='input-labels'>Confirm Password
                <input type='password' value={confirmPassword} onChange={updateConfirmPassword} className='input-field'/>
            </label>
            <button type='submit' className='login-button'>Sign Up</button>
        </form>
    );
};

export default SignUp;