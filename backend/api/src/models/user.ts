import { Schema, model, Document, Model  } from 'mongoose'
import {compare, hash} from 'bcryptjs'
import { BCRYPT_WORK_FACTOR } from '../config'
import { bool } from '@hapi/joi'

interface UserDocument extends Document{
    email: string
    name: string
    password: string
    matchesPassword: (password: string) => Promise<boolean>
    role: string
}

const userSchema = new Schema<UserDocument>({
    email: String,
    name: String,
    password: String,
    role: {type: String, default: 'Diák'}
}, {
        timestamps:true
    })
    

    

userSchema.pre<UserDocument>('save', async function (){
    if((this.isModified('password'))){
        this.password = await hash(this.password, BCRYPT_WORK_FACTOR)
    }
})

userSchema.methods.matchesPassword = function (password: string) {
    return compare(password, (<UserDocument>this).password)
}

userSchema.set('toJSON', {
    transform: (doc, { __v, password, ...rest }, options) => rest
  })



export const User = model('User', userSchema)