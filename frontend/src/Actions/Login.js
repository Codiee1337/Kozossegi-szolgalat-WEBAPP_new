import axios from "axios"
import {USERINFO_FAIL, USERINFO_SUCCESS, USERINFO_REMOVE, USERINFO_REQUEST} from "../Constants/User"

export const logIn = (email,password) => async(dispatch) =>{
    
    
    let userData
    dispatch({type:USERINFO_REQUEST})
    try {
        await axios.post("/login",{email,password}).then((res)=>{
            
            userData = res.data
            localStorage.setItem('userData',JSON.stringify(userData))
            dispatch({type:USERINFO_SUCCESS,payload:userData})
        
        })
        
    } catch (err) {
        if(err&&err.response&&err.response.data){
            
            dispatch({type:USERINFO_FAIL,error:JSON.parse(err.response.data.message)})
        }else{
            
           dispatch({type:USERINFO_FAIL,error:JSON.parse(err.response.data.message)})
        }
       
    }

    if(localStorage.getItem('userData')!=null){
        window.location = '/'
    }

}

export const logOut = () => async(dispatch)=>{
    //console.log('logoutdispatch')
    dispatch({type:USERINFO_REQUEST})
    try {
        axios.post('/logout').then((res)=>{

            dispatch({type:USERINFO_REMOVE})
            //console.log(res)
            localStorage.removeItem('userData')

            if(localStorage.getItem('userData')===null){
                console.log("userData nem letezik")
                window.location = '/'
            }

        }).catch((err)=>{
            
            console.log(err)
            
        })
        
    } catch (error) {
           dispatch({type:USERINFO_REQUEST,error:error.message})
    }

    

}