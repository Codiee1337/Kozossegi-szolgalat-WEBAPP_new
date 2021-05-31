import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { logOut } from '../Actions/Login';
import { Jobs } from '../Actions/Jobs'
import { Grid } from '@material-ui/core'
import { Profile } from '../Actions/Profile'



const useStyles = makeStyles(theme => ({
  appbar: {
    flexGrow: 1,
    
    position: "static",
    boxShadow: "none",
    backgroundColor: "#21cbff"
    
    
  },
  button:{
    display: "flex",
    margin: "2px",
    
    backgroundColor:"#fff",
    color:"black"
  },
  text:{
    display: "flex",
    float: "left",
    color: "black"
  },
  toolbar:{
    minHeight: "50px",
    paddingLeft: 5,
    paddingRight: 5
  },
  img:{
    
    
  }
  

}));


const navLinks = [
  { title: `Login`, path: `/Login` },
  { title: `Register`, path: `/Register` },
  { title: `Home`, path: `/` },
  { title: `Logout`},
  { title: `Jobs`},
  { title: 'Profile', path: '/Profile'}
]



const Header = () => {
  const userData = useSelector(state => state.userData)
  const dispatch = useDispatch()

  const logOutHandler = () =>{
    dispatch(logOut())
  }

  const jobsHandler = () =>{
    dispatch(Jobs())
  }

  

  const classes = useStyles();
  return (
    <div>
    <AppBar  className={classes.appbar}>
    
      <Toolbar  className={classes.toolbar}>
      
      <img className="classes.img" src="KSZA.png" alt="KSZK" height="50" width="200" />
      
      <Grid container justify="flex-end">
      {(!userData||userData.error)&&<Button className={classes.button} variant="contained" href={navLinks[2].path}>{navLinks[2].title}</Button>}
      {(!userData||userData.error)&&<Button className={classes.button} variant="contained" href={navLinks[0].path}>{navLinks[0].title}</Button>}
      {(!userData||userData.error)&&<Button className={classes.button} variant="contained" href={navLinks[1].path}>{navLinks[1].title}</Button>}
      </Grid>
      {(userData&&userData.name)&&<Button className={classes.button} variant="contained" href={navLinks[2].path}>{navLinks[2].title}</Button>}
      {userData&&userData.role=='Admin'&&<Button variant="contained" className={classes.button} onClick={jobsHandler}>{navLinks[4].title}</Button>}
      {userData&&userData.name&&<Button variant="contained" className={classes.button} href={navLinks[5].path}>{navLinks[5].title}</Button>}
      {userData&&userData.name&&<Button variant="contained" className={classes.button} onClick={logOutHandler}>{navLinks[3].title}</Button>}
      
      </Toolbar>
    </AppBar>
    </div>
  )
}
export default Header

 //<input type="button" onClick={} value="log out"></input>