import { REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS} from "../Constants/Register";

export const RegisterReducer = (state={loginInfo:[]},action) =>{
    switch(action.type){
        case REGISTER_SUCCESS:
            return {loginInfo:action.payload}
        case REGISTER_FAIL:
            return {error:action.error}
        case REGISTER_REQUEST:
            return state
        default:
            return state
    }
}