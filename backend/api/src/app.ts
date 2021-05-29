import express from 'express'
import session, { Store } from 'express-session'
import { SESSION_OPTIONS } from './config'
import { login, register, teszt, users } from './routes'
import { notFound, serverError } from './middleware'
import cors from 'cors'
import { createProxyMiddleware } from 'http-proxy-middleware'

export const createApp = (store: Store) => {
    const app = express();

       

    
    

    app.use(express.json())

    app.use(
        session({
            ...SESSION_OPTIONS, 
            store
        })
    )
    
    
    
                
           

    app.use(users)
    app.use(register)
    app.use(teszt)
    app.use(login)
    app.use(notFound)
    app.use(serverError)
    
   

return app
}

