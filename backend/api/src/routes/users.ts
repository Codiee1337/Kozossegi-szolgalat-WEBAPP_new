import { Router } from 'express'
import { guest, catchAsync, auth } from '../middleware'
import { User } from '../models'
import { NotAdmin, NotFound } from '../errors'
import { idSchema, validate } from '../validation'


const router = Router()


router.get('/users/getUserList', auth, catchAsync(async(req,res,next)=>{

    if(req.session.role!='Admin'){
        throw new NotAdmin("Nem vagy admin!")
    }

    const users = await User.find({})
    
    res.json({users})

}))

router.post('/users/getUser',auth ,catchAsync(async(req,res,next)=>{

    
    await validate(idSchema, req.body)

    const user = await User.findOne({_id:req.body.id})

    res.json({user})

    

}))

router.post('/users/updateUserById',auth,catchAsync(async(req,res,next)=>{
    
    //add user validate schema

    if(!req.body.id){
        res.status(403).statusMessage = "No id defined!"
    }
    
    let user = await User.findById(req.body.id)

    if(user===null){
        throw new NotFound('User not found!')
    }else{
        await User.findByIdAndUpdate(req.body.id,req.body)
    }

    user = await User.findById(req.body.id)
    console.log(user)
    res.json(user)

}))







export default router