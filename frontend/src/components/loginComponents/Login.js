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
        // maintains consistent positioning in the center of the innerWidth values of the window.
        slideRef.current.style.left = `calc(50% - 250px)`;
        setQuote(Quote());
    }, [slideRef])

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser(credential, password))
            .catch(async (res) => {
                const data = await res.json()
                if(data && data.errors) setHeaders(data.errors.filter(el => el !== 'Invalid value'))
            })
    };

    const demoLogin = () => {
        dispatch(loginUser('Demo-lition','password'))
    }

    const updateCredential = e => setCredential(e.target.value);
    const updatePassword = e => setPassword(e.target.value);

    const badLoginMessages = headers.map((el, i) => <li key={i} className='form-headers'>{el}</li>)

    return (
        <form onSubmit={handleSubmit} className='login-container' ref={slideRef}>
            <div className='top-level-items'>
                <div className='logo-div'></div>
                <button className='login-demo-button' onClick={demoLogin}>Demo</button>
            </div>
            <div className='bottom-level-items'>
                <ul>{badLoginMessages}</ul>
                <div className='quote-section'>{quote}</div>
                <label className='input-labels'> Username or Email
                    <input type='text' value={credential} onChange={updateCredential} className='input-field'/>
                </label>
                <label className='input-labels'>Password
                    <input type='password' value={password} onChange={updatePassword} className='input-field'/>
                </label>
                <button type='submit' className='login-button'>Login</button>
            </div>
        </form>
    );
};

export default Login;