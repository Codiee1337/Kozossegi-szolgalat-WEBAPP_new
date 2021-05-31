import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import { updateUserById } from '../Actions/Profile';
import classes1 from "./Login.module.css"

const useStyles = makeStyles(theme => ({
    Container:{
        flexGrow:1,
        display: "flex",
        direction: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
        paddingRight: "20px",
        paddingLeft: "20px"
    },
    
    Box: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#161B22",
        padding: "50px",
        borderRadius: "10px",
        height: "auto"
    },
    Data:{
        display: "flex",
        width: "100%",
        flexDirection: "column"
    },
    TextField: {
        border: '10px solid #fff',
        display: 'flex',
        flexWrap: 'wrap',
        margin: theme.spacing(1),
        backgroundColor: 'white'
        
      },
    

    button:{
          color:"black",
          backgroundColor:"#21cbff",
          width:"100%",
          
    }
    
    
  
  }));


export default function Home(props) {
    const userData = useSelector(state => state.userData)
    

    const dispatch = useDispatch()

    const [email,setEmail] = useState("")
    const [name,setName] = useState("")
    
    const profileHandler = (e) =>{
        e.preventDefault(e)
        dispatch(updateUserById(email,name))
    }



    const classes = useStyles();
    
    return (
        <Grid container className={classes1.Login}>
           <Grid lg={3} md={5} xs={10} item className={classes1.LoginBox}>
            <div className={classes1.TextFields}>
            
            
            <input type="text" style={{color:"black"}} onChange={(t)=>setName(t.target.value)} placeholder={userData.name}></input>
         
            
            <input type="text" style={{color:"black"}} onChange={(t)=>setEmail(t.target.value)} placeholder={userData.email}></input>
          
            
            <input type="text" style={{color:"black"}} placeholder={userData.role}></input>
          
                   
            <input type="button" className={classes1.button} onClick={profileHandler} value="Módosítás"></input>
            
            </div>
            </Grid>
        </Grid>
        
    )
}
 