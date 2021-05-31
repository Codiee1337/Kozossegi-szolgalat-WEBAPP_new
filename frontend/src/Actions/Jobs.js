import axios from "axios"

export const Jobs = () => async(dispatch)=>{
    const userData = JSON.parse(localStorage.getItem('userData'))
    
    console.log(userData.role)
    

}