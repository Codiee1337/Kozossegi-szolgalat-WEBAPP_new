import { USERINFO_FAIL, USERINFO_REQUEST, USERINFO_SUCCESS, USERINFO_REMOVE, USERINFO_MODIFY_SUCCESS, USERINFO_MODIFY_REQUEST, USERINFO_MODIFY_FAIL } from "../Constants/User";

export const UserReducer = (state={userData:[]},action) =>{
    switch(action.type){
        case USERINFO_SUCCESS:
            return {userData:action.payload}
        case USERINFO_FAIL:
            return {error:action.error}
        case USERINFO_REQUEST:
            return state
        case USERINFO_REMOVE:
            return {userData:{}}
        case USERINFO_MODIFY_REQUEST:
            return state
        case USERINFO_MODIFY_FAIL:
            return {error:action.error}
        case USERINFO_MODIFY_SUCCESS:
            return {userData:action.payload}
        default:
            return state
    }
}
