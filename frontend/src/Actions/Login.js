import axios from "axios"
import {LOG_IN_REQUEST,LOG_IN_FAIL,LOG_IN_SUCCESS, LOG_OUT_REQUEST, LOG_OUT_FAIL, LOG_OUT_SUCCESS} from "../Constants/Login"

export const logIn = (email,password) => async(dispatch) =>{
    
    if(!localStorage.getItem("loginInfo") === null){
        window.location = "/";
    }
    let userData
    dispatch({type:LOG_IN_REQUEST})
    try {
        await axios.post("/login",{email,password}).then((res)=>{
            
            userData = res.data
            localStorage.setItem('loginInfo',JSON.stringify(userData))
            dispatch({type:LOG_IN_SUCCESS,payload:userData})
        
        }).catch((err)=>{
            
            dispatch({type:LOG_IN_FAIL,error:JSON.parse(err.response.data.message)})
            
            //console.log(err.response.data.message)
        
        })
        
    } catch (error) {
        if(error&&error.response&&error.response.data){
            dispatch({type:LOG_IN_FAIL,error:JSON.parse('['+error.response.data.message+']')})
        }else{
            console.log(error.message)
           dispatch({type:LOG_IN_FAIL,error:error.message})
        }
       
    }
}

export const logOut = () => async(dispatch)=>{
    console.log('logoutdispatch')
    dispatch({type:LOG_OUT_REQUEST})
    try {
        axios.post('/logout').then((res)=>{

            dispatch({type:LOG_OUT_SUCCESS})
            //console.log(res)
            localStorage.removeItem('loginInfo')

        }).catch((err)=>{
            
            console.log(err)
            
        }).finally((res)=>{

            window.location = "/login";

        })
        
    } catch (error) {
           dispatch({type:LOG_IN_FAIL,error:error.message})
    }
}