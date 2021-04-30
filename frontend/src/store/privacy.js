import { csrfFetch } from './csrf';

const GET_PRIVACY = 'privacy/get';
const UPDATE_PRIVACY = 'privacy/update';


const setPrivacy = (privacy) => ({
    type: GET_PRIVACY,
    payload: privacy,
});

const setUpdatedPrivacy = (privacy) => ({
    type: UPDATE_PRIVACY,
    payload: privacy
})


export const getPrivacy = (id) => async dispatch => {
    const res = await csrfFetch(`/api/privacy/${id}`)
    if(res.ok){
        const data = await res.json();
        dispatch(setPrivacy(data))
    }
}


export const updatePrivacy = privacy => async dispatch => {
    const res = await csrfFetch(`/api/privacy/update/${privacy.id}`, {
        method: 'put',
        body: JSON.stringify(privacy)
    });

    if(res.ok){
        const resData = await res.json();
        dispatch(setUpdatedPrivacy(resData));
        return resData;
    }

}


export default function reducer(state = null, action) {
    let newState;
    switch(action.type){
        case GET_PRIVACY: {
            newState = {}
            newState = action.payload;
            return newState;
        }
        case UPDATE_PRIVACY: {
            newState = action.payload;
            return newState;
        }

        default:
            return state;
    }
}