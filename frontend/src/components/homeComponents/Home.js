import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom'

const Home = () => {
    const user = useSelector(state => state.session.user);
    const history = useHistory();


    useEffect(() => {
        if(user === null){
            history.push('/login')
        }

    }, [user, history])

    return (
        <div></div>
    )
}

export default Home;