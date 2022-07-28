import * as UserApi from "../api/UserRequest";


export const updateUser = (id, FormData) => async(dispatch)=> {
    dispatch({type:"UPDATING_START"})
    try {
        const {data} = await UserApi.updateUser(id, FormData);
        dispatch({type:"UPDATING_SUCCESS", data:data})
    } catch (error) {
        dispatch({type:'UPDATING_FAIL'})
    }
}

export const followUser = (id, data) => async(dispatch)=>{
    dispatch({type:"FOLLOW_USER"})
    UserApi.followUser(id, data)
}

export const unFollowUser  = (id, data) => async(dispatch) => {
    dispatch({type:"UNFOLLOW_USER"})
    UserApi.unFollowUser(id, data)
}