import { Router } from 'express'
import { catchAsync, guest, auth } from '../middleware'
import { loginSchema, validate } from '../validation'
import { User  } from '../models'
import { Unauthorized } from '../errors'
import { logIn, logOut } from '../auth'

const router = Router()

router.post('/login', guest, catchAsync(async(req, res) =>{
    
    console.log(req)

    await validate(loginSchema, req.body)

    const { email,password } = req.body
    
    const user = await User.findOne({email})
    
    if(!user || !(await user.matchesPassword(password))){
        throw new Unauthorized()
    }
    

    logIn(req, user.id, user.role)

    res.json(user)

}))

router.post('/logout', auth, catchAsync(async (req,res)=>{

    await logOut(req, res)

    res.status(200).json({message: 'Successfully logged out!'})
    

}))

export default router