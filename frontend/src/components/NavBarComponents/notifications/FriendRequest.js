import { useDispatch } from "react-redux";
import { addFriend } from "../../../store/friends";
import { removeNotification } from "../../../store/notifications";
import { useHistory } from 'react-router-dom';

const FriendRequest = ({props}) => {
    const request = props.request;
    const index = props.index 
    const dispatch = useDispatch();
    const history = useHistory();

    const addNewFriend = (request) => {
        dispatch(addFriend(request));
        dispatch(removeNotification(request));
    }

    const redirectToProfile = () => {
        history.push(`/profile/${request.fromUsername}`);
    }

    return (
        <div className={`${index % 2 !== 0 ? 'notification-container' : 'notification-container-light'} pt-2 pb-2`}>
            <div className="flex-horizon flex-align-center clickable" onClick={redirectToProfile}>
                {
                    request.fromUserProfilePicture ? <img className="h-40 radius-20 ml-2 mr-2" src={request.fromUserProfilePicture} alt='profile'></img> :
                    <i className="fa fa-user search-results-default-user-icon ml-2 mr-2" aria-hidden="true"></i>
                }
                <div className="fsize-1">Friend request from, {request.fromUsername}.</div>
            </div>
            <div className="flex-horizon flex-align-center mt-2">
                <div className="choice-button-light" onClick={() => addNewFriend(request)}>Confirm</div>
                <div className="choice-button-light">Decline</div>
            </div>
        </div>
    )
}

export default FriendRequest;