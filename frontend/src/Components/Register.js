import React, {useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../Actions/Register'
import classes from "./Register.module.css"
import {Grid} from "@material-ui/core"
import UserIcon from '@material-ui/icons/AccountCircle';






export default function Home(props) {
    
    if(localStorage.getItem('userData')!=null){

        window.location = '/'
        
    }

    const userData = useSelector(state => state.userData)
    const dispatch = useDispatch()

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [name,setName] = useState("")
    const [passwordConfirmation,setPasswordConfirmation] = useState("")
    
    

    const registerHandler = (e) =>{
        e.preventDefault(e)
        dispatch(register(email,name,password,passwordConfirmation))
    }

    
    
    return (
        <div>
            <Grid container className={classes.Register}>
            <Grid lg={3} md={5} xs={10} item className={classes.RegisterBox}>
            <UserIcon className={classes.Icon}></UserIcon>
            <h1>Register a new account</h1>
                <div className={classes.TextFields}>
                    <input type="text" style={userData&&userData.error?{color:"#ec4646"}:{color:"black"}} onChange={(t)=>setEmail(t.target.value)} placeholder="email"></input>
                    <input type="text" style={userData&&userData.error?{color:"#ec4646"}:{color:"black"}} onChange={(t)=>setName(t.target.value)} placeholder="name"></input>
                    <input type="password" style={userData&&userData.error?{color:"#ec4646"}:{color:"black"}} onChange={(t)=>setPassword(t.target.value)} placeholder="password"></input>
                    <input type="password" style={userData&&userData.error?{color:"#ec4646"}:{color:"black"}} onChange={(t)=>setPasswordConfirmation(t.target.value)} placeholder="passwordConfirmation"></input>
                </div>

                {userData&&userData.error&&Array.isArray(userData.error)?userData.error.map((entry)=><h3 key={entry} className={classes.error}>{entry}</h3>):userData&&userData.error&&<h3 className={classes.error}>{userData.error.message}</h3>}
                {<input type="button" className={classes.button} onClick={registerHandler} value="Register"></input>}
                
            </Grid>
            </Grid>
        </div>
    )
}
