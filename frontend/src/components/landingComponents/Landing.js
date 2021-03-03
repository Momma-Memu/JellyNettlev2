import React from 'react';
import Carousel from './Carousel';
import PlanEvents from './PlanEvents';
import Connect from './Connect';
import Win from './Win';

const Landing = () => {

    return (
        <>
            <Carousel />
            <div className='info-square-container'>
                <PlanEvents />
                <Connect />
                <Win />
            </div>
        </>
    )
}


export default Landing;