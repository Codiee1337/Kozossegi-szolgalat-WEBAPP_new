import React from 'react'
import { useSelector } from 'react-redux'


export default function Home(props) {
    const userData = useSelector(state => state.userData)
    

   /*if(!userData){
        window.location('/login')
    }*/

    

    return (
        

        <div>
            {<h1>Üdv{userData&&userData.name?' '+userData.name:', kérlek jelentkezz be!'}</h1>}
            {userData&&userData.role&&<h2>Felhasználó szintje: {userData.role}</h2>}
            {userData&&userData.email&&<h2>Email: {userData.email}</h2>}
            {userData&&userData._id&&<h2>ID: {userData._id}</h2>}
            {userData&&userData.createdAt&&<h2>Felhasználó létrehozva: {userData.createdAt}</h2>}
            
        </div>
    )
}
 