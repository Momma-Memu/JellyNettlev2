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
        console.log(data)
    } 
    return response;
};



export default function reducer(state = { userResults: [] }, action) {
    switch(action.type){
        case FIND_FRIENDS:{
            console.log(action.payload)
            const newState = {}
            newState.userResults = action.payload;
            console.log(newState);
            return newState;
        }   
        default:
            return state;
    }
}