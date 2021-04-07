import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { getProfile } from '../../store/profile';

const Home = () => {
    const user = useSelector(state => state.session.user);
    const profile = useSelector(state => state.profile.profile);
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        if(user === null){
            history.push('/login')
        } else {
            dispatch(getProfile(user.id))
        }

    }, [user, history, dispatch])

    return (
        <div></div>
    )
}

export default Home;