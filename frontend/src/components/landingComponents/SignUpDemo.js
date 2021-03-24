import { useRef } from 'react';
import SignUp from '../loginComponents/SignUp';
import { loginUser } from '../../store/session';
import { useDispatch } from 'react-redux';

const SignUpDemo = () => {
    const childRef = useRef();
    const position = '0%';
    const dispatch = useDispatch();

    const demoLogin = () => {
        dispatch(loginUser('Demo-lition','password'))
    }


    return (
        <div className='any-system'>
            <SignUp props={{childRef, position}} />
            <div className='demo-box'>
                <h2 className='demo-header'>Want to just try it out?</h2>
                <button className='demo-button' onClick={demoLogin}>Demo</button>
                <div className='game-dude-background' />
            </div>
        </div>
    )
}

export default SignUpDemo;