import { useSelector } from 'react-redux';

const Profile = () => {
    const user = useSelector(state => state.session.user)

    return (
        <div>hello bitch</div>
    )

}

export default Profile;