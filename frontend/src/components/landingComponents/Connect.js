import { useRef } from 'react';
import Details from './Details';

const Connect = () => {
    const parent = useRef();
    const note = 'Instantly message your team.'

    return (
        <div className='connect-container' ref={parent}>
            <div className='connect-header'>Chat</div>
            <i className="fas fa-scroll connect-icon"></i>
            <Details props={{parent, note}} />
        </div>
    )
}

export default Connect;
