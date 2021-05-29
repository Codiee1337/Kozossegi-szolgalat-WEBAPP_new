import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from "react-router-dom"
import { logOut } from '../Actions/Login'

export default function Home(props) {
    const loginInfo = useSelector(state => state.loginInfo)
    const dispatch = useDispatch()

   /*if(!loginInfo){
        window.location('/login')
    }*/

    const logOutHandler = () =>{
        console.log('asd')
        dispatch(logOut())
    }

    return (
        

        <div>
            {<h1>Üdv{loginInfo&&loginInfo.name?' '+loginInfo.name:', kérlek jelentkezz be!'}</h1>}
            {loginInfo&&loginInfo.role&&<h2>Felhasználó szintje: {loginInfo.role}</h2>}
            {loginInfo&&loginInfo.email&&<h2>Email: {loginInfo.email}</h2>}
            {loginInfo&&loginInfo._id&&<h2>ID: {loginInfo._id}</h2>}
            {loginInfo&&loginInfo.createdAt&&<h2>Felhasználó létrehozva: {loginInfo.createdAt}</h2>}
            
        </div>
    )
}
 