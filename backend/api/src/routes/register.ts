import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants'
import { Router } from 'express'
import { register } from '.'
import { logIn } from '../auth'
import { InvalidEmail } from '../errors'
import { guest, catchAsync } from '../middleware'
import { User } from '../models'
import { registerSchema, validate } from '../validation'
const router = Router()

router.post('/register', guest, catchAsync(async (req,res) =>{
    
    await validate(registerSchema, req.body)
    
    const { email,name,password } = req.body

    const found = await User.exists({email})

    if(found){
        throw new InvalidEmail()
    }

    const user = await User.create({
        email,name,password
    })

    logIn(req,user.id,user.role)

    res.json({message:'OK!'})

}))

export default router