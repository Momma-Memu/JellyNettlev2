import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../../store/session';
import { useHistory } from 'react-router-dom';

const AccountForm = () => {
    const [userName, setUserName] = useState('');
    const user = useSelector(state => state.session.user);
    const [error, setError] = useState('')
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user)
        if(user.username === userName){
            dispatch(deleteUser(user.id));
            history.push('/login')
        } else {
            setError('Please type your current username exactly.')
        }
    }

    return (
        <form onSubmit={handleSubmit} className='settings-form-account'>
            <span className='settings-explanation'>Delete your account</span>
            {error ? <li className='form-headers'>{error}</li> : null}
            <label className='input-labels'> Current username
                <input className='input-field' value={userName} onChange={(e) => setUserName(e.target.value)}/>
            </label>
            <button type='submit' onSubmit={e => handleSubmit(e)} className='login-button'>Delete</button>
        </form>
    )
}

export default AccountForm;