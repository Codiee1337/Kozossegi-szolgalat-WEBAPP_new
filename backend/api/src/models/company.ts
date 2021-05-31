import { Schema, model, Document, Model  } from 'mongoose'
import {compare, hash} from 'bcryptjs'
import { BCRYPT_WORK_FACTOR } from '../config'
import { bool, Description } from '@hapi/joi'

interface CompanyDocument extends Document{
    name: string
    description: string
}



const companySchema = new Schema<CompanyDocument>({
    name: String,
    description: String
    }, {
        timestamps:true
})

companySchema.pre<CompanyDocument>('save', async function (){
    
})

export const Company = model('Company', companySchema)