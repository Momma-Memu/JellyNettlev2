import { csrfFetch } from './csrf';

const GET_PROFILE = 'profile/get';
const UPDATE_PROFILE = 'profile/update';


const setProfile = (profile) => ({
    type: GET_PROFILE,
    payload: profile,
});

const setUpdatedProfile = (profile) => ({
    type: UPDATE_PROFILE,
    payload: profile
})


export const getProfile = (id) => async dispatch => {
    const res = await csrfFetch(`/api/profile/${id}`)
    if(res.ok){
        const data = await res.json();
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

export const updateProfile = profile => async dispatch => {
    const res = await csrfFetch(`/api/profile/update/${profile.id}`, {
        method: 'put',
        body: JSON.stringify(profile)
    });

    if(res.ok){
        const resData = await res.json();
        dispatch(setUpdatedProfile(resData));
        return resData;
    }

}


export default function reducer(state = null, action) {
    let newState;
    switch(action.type){
        case GET_PROFILE: {
            newState = {}
            newState = action.payload;
            return newState;
        }
        case UPDATE_PROFILE: {
            newState = action.payload;
            return newState;
        }

        default:
            return state;
    }
}