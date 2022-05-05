import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getProfile } from '../../store/profile';
import { getPrivacy } from '../../store/privacy';


const Profile = () => {
    const { username } = useParams()
    const user = useSelector(state => state.session.user);
    const profile = useSelector(state => state.profile);
    const privacy = useSelector(state => state.privacy);
    const dispatch = useDispatch();

    const handleAsyncDispatch = async () => {
        let data;
        
        if(user) data = await dispatch(getProfile(user.id));

        if(data){
            dispatch(getPrivacy(data.id));
        };
    };

    useEffect(() => {
        handleAsyncDispatch();
    }, [dispatch]);

    if(!profile && !privacy && !user) return null;

    if((!profile || !privacy) && username === user.username) return (
        <div className='notification-form'>
            <span className='notification-header'>You haven't setup your profile yet, do you want to do that now?</span>
            <Link to='/profile/builder'>
                <button className='choice-button'>Let's go!</button> 
            </Link>
        </div>
    );

    if(username === user.username){
        return (
            <>
                <div className='profile-header'>
                    <img src={profile.photoUrl} alt='profile picture' className='profile-picture' />
                    <span className='profile-username'>{username}</span>
                    <span>{profile.introduction}</span>
                </div>
                <div className='profile-body'>
                    <div className='profile-details'>
                        <span>System: {profile.favoriteConsole}</span>
                        {privacy.gender ?< span>Gender: {profile.gender}</span> : null}
                        {privacy.dob ? <span>Birthday: {new Date(user.dob).toDateString()}</span> : null}
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