import { csrfFetch } from './csrf';

const GET_NOTIFICATIONS = 'notifications/get';
const REMOVE_NOTIFICATION = 'notifications/remove';


const setNotifications = (notifications) => ({
    type: GET_NOTIFICATIONS,
    payload: notifications,
});

export const removeNotification = (notification) => ({
    type: REMOVE_NOTIFICATION,
    payload: notification
});

export const getNotifications = (id) => async dispatch => {
    const res = await csrfFetch(`/api/notifications/${id}`)
    if(res.ok){
        const data = await res.json();
        dispatch(setNotifications(data));
    }
}

export default function reducer(state = [], action) {
    let newState;
    switch(action.type){
        case GET_NOTIFICATIONS: {
            newState = action.payload;
            return newState;
        }

        case REMOVE_NOTIFICATION: {
            console.log('hi', action)
            return state.filter(notification => {
                return notification !== action.payload;
            });
        }

        default:
            return state;
    }
}