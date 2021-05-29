import React, {useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from "react-router-dom"
import { register } from '../Actions/Register'
import classes from "./Register.module.css"
import {Grid} from "@material-ui/core"
import UserIcon from '@material-ui/icons/AccountCircle';


export default function Home(props) {
    const loginInfo = useSelector(state => state.loginInfo)
    const dispatch = useDispatch()

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [name,setName] = useState("")
    const [passwordConfirmation,setPasswordConfirmation] = useState("")

    

    /*if(loginInfo){
        props.history.push('/')
    }*/

    const registerHandler = (e) =>{
        e.preventDefault(e)
        dispatch(register(email,name,password,passwordConfirmation))
    }

    return (
        <div>
            <Grid container className={classes.Register}>
            <Grid lg={3} md={5} xs={10} item className={classes.RegisterBox}>
            <UserIcon className={classes.Icon}></UserIcon>
            <h1>Log in to your account</h1>
                <div className={classes.TextFields}>
                    <input type="text" style={loginInfo&&loginInfo.error?{color:"#ec4646"}:{color:"black"}} onChange={(t)=>setEmail(t.target.value)} placeholder="email"></input>
                    <input type="text" style={loginInfo&&loginInfo.error?{color:"#ec4646"}:{color:"black"}} onChange={(t)=>setName(t.target.value)} placeholder="name"></input>
                    <input type="password" style={loginInfo&&loginInfo.error?{color:"#ec4646"}:{color:"black"}} onChange={(t)=>setPassword(t.target.value)} placeholder="password"></input>
                    <input type="password" style={loginInfo&&loginInfo.error?{color:"#ec4646"}:{color:"black"}} onChange={(t)=>setPasswordConfirmation(t.target.value)} placeholder="passwordConfirmation"></input>
                </div>

                {loginInfo&&loginInfo.error&&Array.isArray(loginInfo.error)?loginInfo.error.map((entry)=><h3 key={entry} className={classes.error}>{entry}</h3>):loginInfo&&loginInfo.error&&<h3 className={classes.error}>{loginInfo.error}</h3>}
                <input type="button" className={classes.button} onClick={registerHandler} value="Register"></input>
            </Grid>
            </Grid>
        </div>
    )
}
