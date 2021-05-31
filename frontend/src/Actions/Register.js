import axios from "axios"
import {USERINFO_REQUEST, USERINFO_FAIL, USERINFO_SUCCESS} from "../Constants/User"

export const register = (email,name,password,passwordConfirmation) => async(dispatch) => {
    
    

    let userData
    dispatch({type:USERINFO_REQUEST})
    try{
        await axios.post("/register",{email,name,password,passwordConfirmation}).then((res) =>{
            
            

            userData = res.data
            
            localStorage.setItem('userData',JSON.stringify(userData))
           
            dispatch({type:USERINFO_SUCCESS,payload:userData})


        })
        
       

    } catch (error) {
        if(error&&error.response&&error.response.data){
            //console.log(error.response.data.message)
            dispatch({type:USERINFO_FAIL,error:JSON.parse(error.response.data.message)})
        }else{
           dispatch({type:USERINFO_FAIL,error:error.message})
        }
    }

    

    if(localStorage.getItem('userData')!=null){

        window.location = '/'
        
    }


}