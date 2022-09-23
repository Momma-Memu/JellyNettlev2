import FriendRequest from "./FriendRequest";

const Notifications = ({props}) => {
    const { menuRef, notifications } = props;

    return (
        <div className="modal-point">
            <div className="modal-container-top" ref={menuRef}>
                {
                    notifications.length === 0 ? <div className="p-2 fsize-2 fcol-white">You're all caught up...</div> :
                    notifications.map((notification, i) => {
                    return (
                        <FriendRequest key={i} props={{request: notification, index: i}} />
                    )
                })}
            </div>
        </div>
    )
}

export default Notifications;