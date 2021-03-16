import { useRef } from 'react';
import Details from './Details';

const Win = () => {
    const parent = useRef();
    const note = 'Build teams to win tournaments.';

    return (
        <div className='win-container' ref={parent}>
            <div className='win-header'>Team Up</div>
            <i className="fas fa-gamepad win-icon"></i>
            <Details props={{parent, note}} />
        </div>
    )
}

export default Win;