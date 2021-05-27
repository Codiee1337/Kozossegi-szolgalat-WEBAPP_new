import { LOG_IN_FAIL, LOG_IN_REQUEST, LOG_IN_SUCCESS } from "../Constants/Login";

export const LogInReducer = (state={},action) =>{
    switch(action.type){
        case LOG_IN_SUCCESS:
            return {loginInfo:action.payload}
        case LOG_IN_FAIL:
            return {error:action.error}
        case LOG_IN_REQUEST:
            return {}
        default:
            return state
    }
}