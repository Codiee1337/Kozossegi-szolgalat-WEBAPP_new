import React, { useEffect, useState } from 'react'
import {Grid} from "@material-ui/core"
import classes from "./Login.module.css"
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { logIn } from '../Actions/Login'

export default function Login(props) {
    const dispatch = useDispatch()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const loginInfo = useSelector(state => state.loginInfo)

    /*const {error} = useSelector(state => state.loginInfo)
    useEffect(()=>{
        console.log(error)
    },[error])*/

    const logInHandler=(e)=>{
        e.preventDefault()
        dispatch(logIn(email,password))
    }

    return (
        <Grid container className={classes.Login}>
           <Grid md={3} item>
                <h1>Log in to your account</h1>
                <div className={classes.TextFields}>
                    <input type="text" onChange={(t)=>setEmail(t.target.value)} placeholder="email"></input>
                    <input type="password" onChange={(t)=>setPassword(t.target.value)} placeholder="password"></input>
                </div>
                <input type="button" className={classes.button} onClick={logInHandler} value="Login"></input>
           </Grid>
        </Grid>
    )
}
