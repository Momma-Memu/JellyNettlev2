// import { useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { useHistory } from 'react-router-dom'
import Carousel from './Carousel';
import PlanEvents from './PlanEvents';
import Connect from './Connect';
import SignUpDemo from './SignUpDemo';
import Footer from './Footer'
import Win from './Win';

const Landing = () => {
    // const user = useSelector(state => state.session.user);
    // const history = useHistory();


    // useEffect(() => {
    //     if(user !== null){
    //         history.push('/')
    //     }

    // }, [user, history])

    return (
        <>
            <Carousel />
            <div className='info-square-container'>
                <PlanEvents />
                <Connect />
                <Win />
            </div>
            <SignUpDemo />
            <Footer />
        </>
    )
}


export default Landing;