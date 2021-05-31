import React, {useState } from 'react'
import {Grid} from "@material-ui/core"
import classes from "./Login.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { logIn } from '../Actions/Login'
import LockOpenIcon from '@material-ui/icons/LockOpen';

export default function Login(props) {
    
    if(localStorage.getItem('userData')!=null){

        window.location = '/'
        
    }
    
    const userData = useSelector(state => state.userData)
    const dispatch = useDispatch()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    
    

    

    

    const logInHandler=(e)=>{       
        e.preventDefault()
        dispatch(logIn(email,password))
    }

    


    return (
        
        <div>
            
        <Grid container className={classes.Login}>
           <Grid lg={3} md={5} xs={10} item className={classes.LoginBox}>
               <LockOpenIcon className={classes.Icon}></LockOpenIcon>
                <h1>Log in to your account</h1>
                <div className={classes.TextFields}>
                    <input type="text" style={userData&&userData.error?{color:"#ec4646"}:{color:"black"}} onChange={(t)=>setEmail(t.target.value)} placeholder="email"></input>
                    <input type="password" style={userData&&userData.error?{color:"#ec4646"}:{color:"black"}} onChange={(t)=>setPassword(t.target.value)} placeholder="password"></input>
                </div>
                
                {userData&&userData.error&&Array.isArray(userData.error)?userData.error.map((entry)=><h3 key={entry} className={classes.error}>{entry}</h3>):userData&&userData.error&&<h3 className={classes.error}>{userData.error}</h3>}
                <input type="button" className={classes.button} onClick={logInHandler} value="Login"></input>
           </Grid>
        </Grid>
        </div>
    )
}
