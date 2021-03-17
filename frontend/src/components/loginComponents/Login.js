import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../store/session';
import Quote from '../../randomData/quotes';

const Login = ({prop}) => {
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [headers, setHeaders] = useState([]);
    const [quote, setQuote] = useState('')
    const dispatch = useDispatch();
    const slideRef = prop.childRef;

    useEffect(() => {
        slideRef.current.style.left = '25%'
        setQuote(Quote());
    }, [slideRef])

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser(credential, password))
            .catch(async (res) => {
                const data = await res.json()
                if(data && data.errors) setHeaders(data.errors.filter(el => el !== 'Invalid value'))
                console.log(data);
            })
    };

    const updateCredential = e => setCredential(e.target.value);
    const updatePassword = e => setPassword(e.target.value);

    const badLoginMessages = headers.map((el, i) => <li key={i} className='form-headers'>{el}</li>)

    return (
        <form onSubmit={handleSubmit} className='login-container' ref={slideRef}>
            <div className='logo-div'></div>
            <div className='quote-section'>{quote}</div>
            <ul>{badLoginMessages}</ul>
            <label className='input-labels'> Username or Email
                <input type='text' onChange={updateCredential} className='input-field'/>
            </label>
            <label className='input-labels'>Password
                <input type='password' onChange={updatePassword} className='input-field'/>
            </label>
            <button type='submit' className='login-button'>Login</button>
        </form>
    );
};

export default Login;