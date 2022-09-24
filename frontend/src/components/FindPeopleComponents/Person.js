import { useState } from 'react';
import { addFriend } from '../../store/friends';
import { useDispatch, useSelector } from 'react-redux';

const Person = ({props}) => {
    const dispatch = useDispatch();
    const { user } = props;
    const currentUser  = useSelector(state => state.session.user);
    const [userAdded, setUserAdded] = useState(false);

    const sendFriendRequest = () => {
        if (user && currentUser) {
            dispatch(addFriend(user.id, currentUser));
            setUserAdded(true);
        }
    }

    return (
        <div className="flex-horizon flex-align-center mt-2">
            { user.Profile && user.Profile.photoUrl ? <img src={user.Profile.photoUrl} alt='profile' className='profile-picture-result ml-5 mr-2' /> : 
            <i className="fa fa-user default-user-icon ml-5 mr-2" aria-hidden="true"></i> }
            <div>{user.username}</div>
            { !userAdded ? <div className="choice-button ml-auto" onClick={sendFriendRequest}>Add Friend</div> : 
            <i className="fa fa-check friend-request-sent-icon ml-auto mr-5" aria-hidden="true"></i>}
        </div>
    )
}

export default Person;