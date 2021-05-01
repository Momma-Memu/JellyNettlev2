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
    const { 
        firstName, 
        lastName, 
        gender, 
        favoriteConsole, 
        introduction, 
        userId, 
        image 
    } = profile;
 
    const formData = new FormData();

    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('gender', gender);
    formData.append('favoriteConsole', favoriteConsole);
    formData.append('introduction', introduction);
    formData.append('userId', userId);
    formData.append('image', image);
    console.log(profile.image)
    const res = await csrfFetch('/api/profile/build', {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      });
    if(res.ok){
        const data = await res.json();
        dispatch(setProfile(data))
        return data;
    }
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