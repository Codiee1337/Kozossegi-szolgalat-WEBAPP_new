import { Router } from 'express'
import { NotAdmin, NotFound } from '../errors'
import { auth, catchAsync } from '../middleware'
import { Job } from '../models/job'
import { idSchema, jobSchema, validate } from '../validation'

const router = Router()




router.get('/jobs/teszt', (req,res) =>{

    if(req.session.role!='Admin'){
        throw new NotAdmin("Nem vagy admin!")
    }

    res.json({message:'JOBS TESZT'})

})

router.post('/jobs/createJob', auth, catchAsync(async (req,res)=>{

    if(req.session.role!='Admin'){
        throw new NotAdmin("Nem vagy admin!")
    }

    await validate(jobSchema, req.body)

    const { headline, description, categories, visible } = req.body

    const job = await Job.create({
        headline, description, categories, visible
    })


    res.json(job)
}))

router.get('/jobs/getJobs', auth, catchAsync(async (req,res)=>{

    if(req.session.role!='Admin'){
        throw new NotAdmin("Nem vagy admin!")
    }

    const jobs = await Job.find({})
    res.json(jobs)

}))

router.post('/jobs/getJobById', auth, catchAsync(async (req,res)=>{

    if(req.session.role!='Admin'){
        throw new NotAdmin("Nem vagy admin!")
    }

    await validate(idSchema, req.body)

    const job = await Job.findById(req.body.id)
    res.json(job)

}))


router.delete('/jobs/deleteJobById',auth,catchAsync(async (req,res)=>{
    
    if(req.session.role!='Admin'){
        throw new NotAdmin("Nem vagy admin!")
    }
    
    await validate(idSchema,req.body)

    const job = await Job.findById(req.body.id)

    if(job===null){
        throw new NotFound('Job not found!')
    }else{
        await Job.remove(job)
    }

    res.json('OK!')


}))

router.patch('/jobs/updateJobById', auth, catchAsync(async (req,res)=>{
    
    if(req.session.role!='Admin'){
        throw new NotAdmin("Nem vagy admin!")
    }

    if(!req.body.id){
        res.status(403).statusMessage = "No id defined!"
    }
    
    const job = await Job.findById(req.body.id)

    if(job===null){
        throw new NotFound('Job not found!')
    }else{
        await Job.findByIdAndUpdate(req.body.id,req.body)
    }
    

    res.json('OK!')

}))


export default router