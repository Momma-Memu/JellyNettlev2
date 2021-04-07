import { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';

const Welcome = () => {
    const [showForm, setShowForm] = useState(false);
    const user = useSelector(state => state.session.user) || {};
    const messageRef = useRef();
    let opacity = 0;
    let index = 0;
    const messages = [
        `Welcome ${user.username}`,
        "Before you get started, let's set up your profile.",
        "For your privacy, you may choose to set all of this information to private.",
    ]

    const fadeOut = () => {
        messageRef.current.style.opacity = 0;
        opacity = 0;
    };

    const fadeIn = () => {
        messageRef.current.innerHTML = messages[index]
        messageRef.current.style.opacity = 1;
        opacity = 1;
        index += 1;
    }
    
    const handleFading = async (interval, timeout) => {
        if(index > messages.length - 1) {
            clearInterval(interval);
            fadeOut();
            timeout = setTimeout(() => {
                setShowForm(true)
            }, 1000);
            return;
        };
        if(opacity === 0){
            fadeIn();
        } else {
            fadeOut();
        }
    }

    useEffect(() => {
        let interval;
        let timeout;
        if(user && messageRef) {
            interval = setInterval(() => {
                handleFading(interval, timeout);
            }, 3000);
        }
        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };

    }, [user, messageRef, index])
    
    if(!user) return null;

    return (
        <div className='welcome-container'>
            {!showForm ? <div className='message-fader' ref={messageRef}></div> : null}
            {showForm ? <div>slide me mommy</div> : null}
        </div>
    )
}

export default Welcome;
