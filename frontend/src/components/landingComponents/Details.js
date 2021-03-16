import { useRef, useEffect } from 'react';

const Details = ({props}) => {

    useEffect(() => {
        const parent = props.parent.current;
        parent.onmouseenter = popIn;
        parent.onmouseleave = popOut;
    }, [props.parent])

    const details = useRef();

    const popIn = () => {
        const el = details.current;
        el.style.top = '25%';

    }

    const popOut = () => {
        const el = details.current;
        el.style.top = '-5%';
    }

    return (
        <div ref={details} className='details-div'>
            <span>{props.note}</span>
        </div>
    )
}

export default Details;