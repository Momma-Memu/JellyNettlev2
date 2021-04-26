import { csrfFetch } from './csrf';

const GET_PROFILE = 'profile/get';


const setProfile = (profile) => ({
    type: GET_PROFILE,
    payload: profile,
});


export const getProfile = (id) => async dispatch => {
    const res = await csrfFetch(`/api/profile/${id}`)
    if(res.ok){
        const data = await res.json();
        console.log(data)
        dispatch(setProfile(data))
    }
}

export const buildProfile = (profile) => async dispatch => {
    const res = await csrfFetch('/api/profile/build', {
        method: 'post',
        body: JSON.stringify(profile)
    });
    const data = await res.json();
    return data;
}


export default function reducer(state = { profile: null }, action) {
    let newState;

    switch(action.type){
        case GET_PROFILE:
            newState = Object.assign({}, state)
            newState.profile = action.payload;
            return newState;

        default:
            return state;
    }
}