import { csrfFetch } from './csrf';

const FIND_FRIENDS = 'FIND_FRIENDS';

const setUsers = (users) => {
    console.log(users)
    return {
        type: FIND_FRIENDS,
        payload: users
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
    const response = await csrfFetch(`/api/users/friend-request/${id}`, {
        method: 'post',
        body: JSON.stringify({user})
    });
    const data = await response.json();
    
    if(data.users){
        dispatch(setUsers(data.users));
    } 
    return response;
}



export default function reducer(state = { userResults: [] }, action) {
    switch(action.type){
        case FIND_FRIENDS:{
            const newState = {}
            newState.userResults = action.payload;
            return newState;
        }   
        default:
            return state;
    }
}