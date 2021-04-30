import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../../store/session';
import { useHistory } from 'react-router-dom';

const AccountForm = () => {
    const [password, setPassword] = useState('');
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(deleteUser(user.id));
        history.push('/login')
    }

    return (
        <form onSubmit={handleSubmit} className='settings-form-account'>
            <span className='settings-explanation'>Delete your account</span>
            <label className='input-labels'> Password
                <input className='input-field' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <button type='submit' onSubmit={e => handleSubmit(e)} className='login-button'>Delete</button>
        </form>
    )
}

export default AccountForm;