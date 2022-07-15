import { useEffect } from "react";

const Notifications = ({props}) => {
    const { menuRef } = props;


    return (
        <div className="modal-point">
            <div className="modal-container-top" ref={menuRef}>

            </div>
        </div>
    )
}

export default Notifications;