import Joi from '@hapi/joi'
import { BCRYPT_MAXIMUM_BYTES } from '../config'


const id = Joi.string().required()

const email = Joi.string().email().min(8).max(254).lowercase().trim().required().empty().messages({
    'string.lowercase':'Csak kisbetű lehet az emailben!',
    'string.required':'Az email nem lehet üres!',
    'string.min':'Az emailnek minimum 8 karakter hosszúnak kell lennie!',
    'string.max':'Az email nem lehet hosszabb 254 karakternél',
    'string.email':'Nem megfelelő email cím!',
    'string.empty':'Az email mező nem lehet üres!!',
    'string.trim':'Az email nem tartalmazhat szóköz karaktert!'
})

const name = Joi.string().min(3).max(128).trim().required().empty().messages({
    'string.required':'A név mező nem lehet üres!',
    'string.min':'Az névnek minimum 3 karakter hosszúnak kell lennie!',
    'string.max':'A név nem lehet hosszabb 128 karakternél',
    'string.empty':'Az név mező nem lehet üres!!'
    
})

const password = Joi.string().min(8).max(BCRYPT_MAXIMUM_BYTES,'utf8')
.pattern(/^(?=.*?[\p{Lu}])(?=.*?[\p{Ll}])(?=.*?\d).*$/u)
.required()
.empty()
.messages({
    'string.pattern.base':'A jelszónak tartalmaznia kell egy nagybetűt, egy kisbetűt és egy számot!',
    'string.required':'A jelszó nem lehet üres!',
    'string.min':'A jelszónak minimum 8 karakter hosszúnak kell lennie!',
    'string.max':'A jelszó nem lehet hosszabb 18 karakternél',
    'string.empty':'Nem adhatsz meg üres jelszót!'
})

const passwordConfirmation = Joi.valid(Joi.ref('password')).required().messages({
    'string.required':'Kérlek add meg a jelszót mégegyszer!'

})

export const registerSchema = Joi.object({
    email,
    name,
    password, 
    passwordConfirmation


})

export const loginSchema = Joi.object().keys({
    email,
    password
})

export const idSchema = Joi.object({
    id
})