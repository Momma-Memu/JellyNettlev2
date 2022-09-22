import { csrfFetch } from './csrf';

const FIND_FRIENDS = 'FIND_FRIENDS';
const FIND_REQUESTS = 'FIND_REQUESTS';

const setUsers = (users) => {
    return {
        type: FIND_FRIENDS,
        payload: users
    }
}

const setRequests = (requests) => {
    console.log(requests)
    return {
        type: FIND_REQUESTS,
        payload: requests,
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

export const addFriend = (id, user) => async dispatch => {
    console.log(id, user)
    const response = await csrfFetch(`/api/users/friend-request/${id}`, {
        method: 'post',
        body: JSON.stringify({user})
    });
    const data = await response.json();
}

export const getRequests = (id) => async dispatch => {
    const response = await csrfFetch(`/api/users/friend-request/${id}`);
    const data = await response.json();

    if (data.requests) {
        dispatch(setRequests(data.requests))
    }

    return response;
}



export default function reducer(state = { userResults: [], requests: [] }, action) {
    switch(action.type) {
        case FIND_FRIENDS: {
            const newState = {}
            newState.userResults = action.payload;
            newState.requests = state.requests;
            return newState;
        }

        case FIND_REQUESTS: {
            const newState = {}
            newState.requests = action.payload;
            newState.userResults = state.userResults;
            return newState;
        }

        default:
            return state;
    }
}