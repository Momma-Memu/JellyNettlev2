import { csrfFetch } from './csrf';

const FIND_FRIENDS = 'FIND_FRIENDS';
const ACCEPT_REQUEST = 'ACCEPT_REQUEST';

const setUsers = (users) => {
    return {
        type: FIND_FRIENDS,
        payload: users
    }
}

const setNewFriend = (friend) => {
    return  {
        type: ACCEPT_REQUEST, 
        payload: friend
    }
}


export const findUsers = (credential) => async dispatch => {
    const response = await csrfFetch(`/api/users/search/${credential}`);
    const data = await response.json();
    if(data.users){
        dispatch(setUsers(data.users));
    } 
    return response;
}

export const addFriend = (request) => async dispatch => {
    console.log(request)
    const response = await csrfFetch('/api/users/add-friend', {
        method: 'post',
        body: JSON.stringify({request})
    });
    const data = await response.json();
    console.log(data);
    dispatch(setNewFriend(data.newFriend));
}

export default function reducer(state = [], action) {
    switch(action.type) {
        case FIND_FRIENDS: {
            const newState = {}
            newState.userResults = action.payload;
            return newState;
        }

        case ACCEPT_REQUEST: {
            return [...state, action.payload];
        }

        default:
            return state;
    }
}