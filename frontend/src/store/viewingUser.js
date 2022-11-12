import { csrfFetch } from './csrf';

const GET_USER = 'viewingUser/get';
const REMOVE_USER = 'viewingUser/remove';


const setViewingUser = (user) => ({
    type: GET_USER,
    payload: user,
});

export const removeViewingUser = (user) => ({
    type: REMOVE_USER,
    payload: user,
});

export const getViewingUser = (username) => async dispatch => {
    const res = await csrfFetch(`/api/users/search/${username}`)
    const data = await res.json();

    console.log(data)

    if (res.ok) {
        dispatch(setViewingUser(data.users[0]));
    }

    console.log(data);

    return data[0];
}

export default function reducer(state = {}, action) {
    let newState;
    switch(action.type){
        case GET_USER: {
            newState = action.payload;
            return newState;
        }

        case REMOVE_USER: {
            return {};
        }

        default:
            return state;
    }
}