import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Profile = () => {
    const { username } = useParams()
    const user = useSelector(state => state.session.user);
    const profile = useSelector(state => state.profile);
    const privacy = useSelector(state => state.privacy);

    if(!user || !profile || !privacy) return null;

    if(username === user.username){
        return (
            <>
                <div className='profile-header'>
                    <img src={profile.photoUrl} className='profile-picture' />
                    <span className='profile-username'>{username}</span>
                    <span>{profile.introduction}</span>
                </div>
                <div className='profile-body'>
                    <div className='profile-details'>
                        <span>System: {profile.favoriteConsole}</span>
                        {privacy.gender ?< span>Gender: {profile.gender}</span> : null}
                        {privacy.dob ? <span>Birthday: {profile.dob}</span> : null}
                        <span>Member Since: {user.createdAt.split('-')[0]}</span>
                    </div>
                </div>
            </>
        );
    } else {
        return null;
    }

};

export default Profile;