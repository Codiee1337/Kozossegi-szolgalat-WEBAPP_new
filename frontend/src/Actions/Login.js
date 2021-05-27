import axios from "axios"
import {LOG_IN_REQUEST,LOG_IN_FAIL,LOG_IN_SUCCESS} from "../Constants/Login"

export const logIn = (email,password) => async(dispatch) =>{
    dispatch({type:LOG_IN_REQUEST})
    try {
        await axios.post("/login",{email,password},{withCredentials: true}).then((res)=>{
            console.log(res);
        })
        /*const {data} = await axios.post("/login",{email,password})
        localStorage.setItem('loginInfo',JSON.stringify(data))
        dispatch({type:LOG_IN_SUCCESS,payload:data})*/
    } catch (error) {
        dispatch({type:LOG_IN_FAIL,error:error.message})
    }
}