import { Schema, model, Document, Model  } from 'mongoose'
import {compare, hash} from 'bcryptjs'
import { BCRYPT_WORK_FACTOR } from '../config'
import { bool } from '@hapi/joi'

interface JobDocument extends Document{
    headline: string
    description: string
    categories: string[]
    companyId: string
    visible: boolean
}



const jobSchema = new Schema<JobDocument>({
    headline: String,
    description: String,
    categories: [String],
    companyId: String,
    visible: Boolean
    }, {
        timestamps:true
})

jobSchema.pre<JobDocument>('save', async function (){
    
})

export const Job = model('Job', jobSchema)