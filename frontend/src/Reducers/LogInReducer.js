import { LOG_IN_FAIL, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_OUT_FAIL, LOG_OUT_REQUEST, LOG_OUT_SUCCESS } from "../Constants/Login";

export const LogInReducer = (state={loginInfo:[]},action) =>{
    switch(action.type){
        case LOG_IN_SUCCESS:
            return {loginInfo:action.payload}
        case LOG_IN_FAIL:
            return {error:action.error}
        case LOG_IN_REQUEST:
            return state
        default:
            return state
    }
}
export const logOutReducer = (state={},action)=>{
    switch(action.type){
        case LOG_OUT_SUCCESS:
            return {loginInfo:{}}
        default:
            return state
    }
}