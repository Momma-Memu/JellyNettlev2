import { useEffect } from "react";

const Notifications = ({props}) => {
    const { menuRef, notifications } = props;

    console.log(notifications)

    return (
        <div className="modal-point">
            <div className="modal-container-top" ref={menuRef}>
                {notifications.map(notification => {
                    return (
                        <div>{notification.fromUsername}</div>
                    )
                })}
            </div>
        </div>
    )
}

export default Notifications;