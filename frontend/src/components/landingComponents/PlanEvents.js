import { useRef } from 'react';
import Details from './Details'


const PlanEvents = () => {
    const parent = useRef();
    const note = 'Plan events for your favorite games.'

    return (
        <div className='plan-events-container' ref={parent}>
            <div className='plan-events-header'>Plan Events</div>
            <i className="fas fa-sitemap event-icon"></i>
            <Details props={{parent, note}} />
        </div>
    )
}

export default PlanEvents;