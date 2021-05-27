import { Router } from 'express'

const router = Router()




router.get('/teszt', (req,res) =>{

    res.json({message:'TESZT, OK!'})

})








export default router