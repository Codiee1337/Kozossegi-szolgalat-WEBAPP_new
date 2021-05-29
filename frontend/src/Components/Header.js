import React, {useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Login from './Login';
import { logOut } from '../Actions/Login';
import classes from "./Header.module.css"






const navLinks = [
  { title: `Login`, path: `/Login` },
  { title: `Register`, path: `/Register` },
  { title: `Home`, path: `/` },
  { title: `Logout`},
  { title: `faq`, path: `/faq` },
]



const Header = () => {
  const loginInfo = useSelector(state => state.loginInfo)
  const dispatch = useDispatch()

  const logOutHandler = () =>{
    dispatch(logOut())
  }
  return (
    <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
      <Typography variant="h5" className={classes.text}>KSZA</Typography>
      
      <Button variant="contained" href={navLinks[2].path}>{navLinks[2].title}</Button>
      <Button variant="contained" href={navLinks[0].path}>{navLinks[0].title}</Button>
      <Button variant="contained" href={navLinks[1].path}>{navLinks[1].title}</Button>
      
      {loginInfo&&loginInfo.name&&<Button variant="contained" onClick={logOutHandler}>{navLinks[3].title}</Button>}
      
      </Toolbar>
    </AppBar>
    </div>
  )
}
export default Header

 //<input type="button" onClick={} value="log out"></input>