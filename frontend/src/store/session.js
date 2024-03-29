import { csrfFetch } from './csrf';

const LOGIN_USER = 'LOGIN_USER';
const FAILED_LOGIN = 'FAILED_LOGIN';
const REMOVE_USER = 'REMOVE_USER';
const FAILED_RESTORE = 'FAILED_RESTORE';
const UPDATE_USER = 'UPDATE_USER';

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

const failedRestore = () => {
    return {
        type: FAILED_RESTORE,
    }
}

const setUpdatedUser = (user) => {
    return {
        type: UPDATE_USER,
        payload: user
    }
}

export const restoreUser = () => async dispatch => {
    const response = await csrfFetch('/api/session');
    const data = await response.json();
    if(data.user){
        dispatch(setUser(data.user));
    } else {
        dispatch(failedRestore())
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
        dispatch(setUser(data.user));
    } else {
        dispatch(failedLogin(data))
    }
}

export const logout = () => async dispatch => {
    const response = await csrfFetch('/api/session', {
      method: 'DELETE',
    });
    dispatch(removeUser());
    return response;
};

export const deleteUser = (id) => async dispatch => {
    await csrfFetch(`/api/users/delete/${id}`, {
        method: 'DELETE',
    })

    await csrfFetch('/api/session', {
        method: 'DELETE',
    });


    dispatch(removeUser());
    // return response;
}

export const signUp = (password, email, username, confirmPassword, dob) => async (dispatch) => {

    const res = await csrfFetch('/api/users', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({password, email, username, confirmPassword, dob})
    })
    if(res.ok){
        const data = await res.json();
        dispatch(setUser(data))
        return data;
    }
}

export const updateUser = (data) => async dispatch => {
    const res = await csrfFetch(`/api/users/update/${data.id}`, {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })

    if(res.ok){
        const resData = await res.json();
        dispatch(setUpdatedUser(resData));
        return resData;
    }
}

export default function reducer(state = { user: null }, action) {
    switch(action.type){
        case LOGIN_USER:{
            const newState = {};
            newState.user = action.payload;
            return newState;
        }
        case FAILED_RESTORE:
            return state;
        case REMOVE_USER:
            return { user: null };
        case UPDATE_USER: {
            const newState = {};
            newState.user = action.payload;
            return newState;
        }
            
        default:
            return state;
    }
}