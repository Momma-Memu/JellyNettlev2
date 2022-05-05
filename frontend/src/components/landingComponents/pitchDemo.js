import { loginUser } from '../../store/session';
import { useDispatch } from 'react-redux';

const PitchDemo = () => {
    const dispatch = useDispatch();

    const demoLogin = () => {
        dispatch(loginUser('Demo-lition','password'))
    }

    return (
        <div className='any-system'>
            <div className='why-jn'>
                <h2 className='why-jn-header'>Why JellyNettle?</h2>
                <div className='why-jn-text'>JellyNettle isn't just another social media platform.</div>
            </div>
            <div className='demo-box'>
                <h2 className='demo-header'>Want to just try it out?</h2>
                <button className='demo-button' onClick={demoLogin}>Demo</button>
                <div className='game-dude-background' />
            </div>
        </div>
    )
}

export default PitchDemo;