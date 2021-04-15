import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../../store/session';

const SignUp = ({props}) => {
    const [userName, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [headers, setHeaders] = useState([]);
    const [scrollVal, setScrollVal] = useState(0)
    const dispatch = useDispatch();
    const slideRef = props.childRef;

    useEffect(() => {
        if(props.position){
            document.body.onscroll = () => setScrollVal(document.scrollingElement.scrollTop);
            if(scrollVal >= 320){
                slideRef.current.style.left = props.position;
            }
        }

        if(!props.position){
            slideRef.current.style.left = '25%';
        }
        return () => {
            document.body.onscroll = null;
        }
    }, [slideRef, props.position, scrollVal])

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signUp(password, email, userName, confirmPassword))
            .catch(async (res) => {
                const data = await res.json()
                const errors = data.errors.filter(el => el !== 'Invalid value');
                if(data && data.errors) setHeaders(errors);
                if(data.errors.length > 0){
                    console.log(data.errors)
                };
            });
    };
    console.log('hello')
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