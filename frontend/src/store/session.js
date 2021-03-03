import { csrfFetch } from './csrf';

const LOGIN_USER = 'LOGIN_USER';
const FAILED_LOGIN = 'FAILED_LOGIN';
const REMOVE_USER = 'REMOVE_USER';

const setUser = (user) => {
    return {
        type: LOGIN_USER,
        payload: user
    }
}

const failedLogin = (headers) => {
    return {
        type: FAILED_LOGIN,
        payload: headers,
    }
}

const removeUser = () => {
    return {
        type: REMOVE_USER,
    }
}


export const restoreUser = () => async dispatch => {
    const response = await csrfFetch('/api/session');
    const data = await response.json();

    if(data.id){
        dispatch(setUser(data));
    } else {
        dispatch(removeUser());
    }
    return response;
};


export const loginUser = (credential, password) => async (dispatch) => {
    const res = await csrfFetch('/api/session/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({credential, password})
    })
    const data = await res.json();
    if(res.ok){
        dispatch(setUser(data));
    } else {
        dispatch(failedLogin(data))
    }
}

export const logout = () => async (dispatch) => {
    const response = await csrfFetch('/api/session', {
      method: 'DELETE',
    });
    dispatch(removeUser());
    return response;
};

export default function reducer(state = { user: null }, action) {
    switch(action.type){
        case LOGIN_USER:
            return action.payload;
        case FAILED_LOGIN:
            return action.payload
        case REMOVE_USER:
            return { user: null }
        // case ADD_USER:
        //     return action.details
        default:
            return state;
    }
}