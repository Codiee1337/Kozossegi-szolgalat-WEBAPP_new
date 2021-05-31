import mongoose from 'mongoose'

import Redis from 'ioredis'
import session from 'express-session'
import connectRedis from 'connect-redis'
import { hostname } from 'os'
import { REDIS_OPTIONS, APP_PORT, MONGO_URI, MONGO_OPTIONS, IP_BIND } from './config'
import { createApp } from './app'

;(async () => {
    
await mongoose.connect(MONGO_URI, MONGO_OPTIONS).catch(err=>{
console.log(err)

})

mongoose.set('useFindAndModify', false);

const RedisStore = connectRedis(session)

const client = new Redis(REDIS_OPTIONS)

const store = new RedisStore({ client })

const app = createApp(store);



app.listen(5000, IP_BIND, () => console.log('It works!'))
})()

