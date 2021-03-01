import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loginUser } from '../../store/session';

const Login = () => {
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [headers, setHeaders] = useState([]);
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const history = useHistory();

    if(user !== null){
        history.push('/')
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser(credential, password))
            .catch(async (res) => {
                const data = await res.json()
                if(data && data.errors) setHeaders(data.errors)
                console.log(data);
            })
    };

    const updateCredential = e => setCredential(e.target.value);
    const updatePassword = e => setPassword(e.target.value);

    const badLoginMessages = headers.map((el, i) => <li key={i} className='form-headers'>{el}</li>)

    return (
        <form onSubmit={handleSubmit} className='login-container'>
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