import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {Link} from "react-router-dom"

export default function Home() {
    const loginInfo = useSelector(state => state.loginInfo)
    
    return (
        <div>
            {loginInfo?<h1>Üdv {loginInfo.name}</h1>:<Link to="/login"><h1>Login</h1></Link>}
        </div>
    )
}
