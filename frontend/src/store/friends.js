import { csrfFetch } from './csrf';

const FIND_PEOPLE = 'FIND_PEOPLE';
const GET_FRIENDS = 'GET_FRIENDS';
const GET_REQUESTS = 'GET_REQUESTS';
const ACCEPT_REQUEST = 'ACCEPT_REQUEST';

const setUsers = (users) => {
    return {
        type: FIND_PEOPLE,
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
        case FIND_PEOPLE: {
            const newState = {}
            newState.userResults = action.payload;
            return newState;
        }

        case GET_FRIENDS: {
            const newState = { ...state };
            newState.friends = action.payload;
            return newState;
        }

        case GET_REQUESTS: {
            const newState = { ...state };
            newState.requests = action.payload;
            return newState;
        }

        case ACCEPT_REQUEST: {
            return [...state, action.payload];
        }

        default:
            return state;
    }
}