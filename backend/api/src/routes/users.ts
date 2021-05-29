import { Router } from 'express'
import { guest, catchAsync, auth } from '../middleware'
import { User } from '../models'
import { NotAdmin } from '../errors'
import { idSchema, validate } from '../validation'


const router = Router()


router.get('/users/getUserList', auth, catchAsync(async(req,res,next)=>{

    if(req.session.role!='Admin'){
        throw new NotAdmin("Nem vagy admin!")
    }

    const users = await User.find({})
    
    res.json({users})

}))

router.post('/users/getUser',/*auth*/catchAsync(async(req,res,next)=>{

    /*if(req.session.role!='Admin'){
        throw new NotAdmin()
    }*/
    
    await validate(idSchema, req.body)

    const user = await User.findOne({_id:req.body.id})

    res.json({user})

    

}))








export default router