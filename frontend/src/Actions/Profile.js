import axios from "axios"
import { USERINFO_MODIFY_FAIL, USERINFO_MODIFY_REQUEST, USERINFO_MODIFY_SUCCESS } from "../Constants/User"

export const updateUserById = (email,name) => async(dispatch)=>{
    let userData = JSON.parse(localStorage.getItem('userData'))
    
    const id = userData._id
    if(email==''){
        email = userData.email
    }
    if(name==''){
        name = userData.name
    }
    
    

    dispatch({type:USERINFO_MODIFY_REQUEST})
    try {
        await axios.post("/users/updateUserById",{id:id,name:name,email:email}).then((res)=>{
            
            userData = res.data
            localStorage.setItem('userData',JSON.stringify(userData))
            console.log(userData)
            dispatch({type:USERINFO_MODIFY_SUCCESS,payload:userData})
        
        })
        
    } catch (err) {
        if(err&&err.response&&err.response.data){
            console.log(err)
            dispatch({type:USERINFO_MODIFY_FAIL,error:JSON.parse(err.response.data.message)})
        }else{
            console.log(err)
           //dispatch({type:USERINFO_MODIFY_FAIL,error:JSON.parse(err.response.data.message)})
        }
       
    }

    if(localStorage.getItem('userData')!=null){
        window.location = '/profile'
    }
    

}