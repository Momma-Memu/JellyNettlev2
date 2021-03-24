import { useState } from 'react';

const Welcome = () => {
    const [current, setCurrent] = useState(messages[0]);
    const messages = [
                <div className='message-fader'>Welcome</div>, 
                <div className='message-fader'>Before you get started, let's get some info.</div>
            ];
    return (
        {current}
    )
}

export default Welcome