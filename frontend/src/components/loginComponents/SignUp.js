import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../../store/session';

const SignUp = ({props}) => {
    const [userName, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [headers, setHeaders] = useState([]);
    // const [scrollVal, setScrollVal] = useState(0);
    const [dob, setDob] = useState('');
    const dispatch = useDispatch();
    const slideRef = props.childRef;
    const scrollVal = props.scrollVal;
    // const setScrollVal = props.setScrollVal;

    useEffect(() => {
        if(props.position){
            // document.body.onscroll = () => setScrollVal(document.scrollingElement.scrollTop);
            if(scrollVal >= 320){
                slideRef.current.style.left = props.position;
            }
        }

        if(!props.position){
            slideRef.current.style.left = '25%';
        }
        // return () => {
        //     document.body.onscroll = null;
        // }
    }, [slideRef, props.position, scrollVal, props])

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = [];
        const today = new Date();
        const rawDOB = dob.split('-');
        const jsDOB = new Date(rawDOB[0], (rawDOB[1] - 1), rawDOB[2]);
        const days = Math.abs(today - jsDOB) / (1000 * 3600 * 24);

        if(userName.length < 4) formErrors.push('Please provide a username with at least 4 characters.')
        if(days < 6574.36) formErrors.push('Users must be 18 years or older.');
        if(dob.length < 1) formErrors.push('Must provide valid date of birth.');
        if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(userName)) formErrors.push('Username cannot be an email.');
        if(password.length < 6) formErrors.push('Password must be 6 characters or more.');
        if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))) formErrors.push('Please provide a valid email.');
        if(password !== confirmPassword) formErrors.push('Password and Confirm Password must match exactly.')
        if(formErrors.length === 0){
            dispatch(signUp(password, email, userName, confirmPassword, dob))
                .catch(async (res) => {
                    const data = await res.json()
                    const errors = data.errors.filter(el => el !== 'Invalid value');
                    if(data && data.errors) setHeaders([...errors, ...formErrors]);

                });
        } else {
            setHeaders(formErrors);
        };
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
            <label className='input-labels'> Date of Birth
                <input className='input-date' type='date' value={dob} onChange={e => setDob(e.target.value)}/>
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