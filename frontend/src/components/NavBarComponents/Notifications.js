import { useEffect } from "react";

const Notifications = ({props}) => {
    const { menuRef, notifications } = props;

    console.log(notifications)

    return (
        <div className="modal-point">
            <div className="modal-container-top" ref={menuRef}>
                {notifications.map((notification, i) => {
                    return (
                        <div className={`${i % 2 !== 0 ? 'notification-container' : 'notification-container-light'} pt-2 pb-2`}>
                            <div className="flex-horizon flex-align-center">
                                {
                                    notification.fromUserProfilePicture ? <img className="h-40 radius-20 ml-2 mr-2" src={notification.fromUserProfilePicture}></img> :
                                    <i className="fa fa-user search-results-default-user-icon ml-2 mr-2" aria-hidden="true"></i>
                                }
                                <div className="fsize-1">Friend request from, {notification.fromUsername}.</div>
                                <div> </div>
                            </div>
                            <div className="flex-horizon flex-align-center mt-2">
                                <div className="choice-button-light">Confirm</div>
                                <div className="choice-button-light">Decline</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Notifications;