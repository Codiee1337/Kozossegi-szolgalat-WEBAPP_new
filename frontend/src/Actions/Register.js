import axios from "axios"
import {REGISTER_REQUEST, REGISTER_FAIL, REGISTER_SUCCESS} from "../Constants/Register"

export const register = (email,name,password,passwordConfirmation) => async(dispatch) => {
    
    let userData
    dispatch({type:REGISTER_REQUEST})
    try{
        await axios.post("/register",{email,name,password,passwordConfirmation}).then((res) =>{
            userData = res.data
            
            localStorage.setItem('logininfo'.JSON.stringify(userData))
            
            dispatch({type:REGISTER_SUCCESS,payload:userData})

        })

    } catch (error) {
        if(error&&error.response&&error.response.data){
            console.log(error.response.data)
            dispatch({type:REGISTER_FAIL,error:JSON.parse('['+error.response.data.message+']')})
        }else{
           dispatch({type:REGISTER_FAIL,error:error.message})
        }
    }


}