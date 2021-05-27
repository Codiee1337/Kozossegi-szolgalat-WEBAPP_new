import express from 'express'
import session, { Store } from 'express-session'
import { SESSION_OPTIONS } from './config'
import { login, register, teszt, users } from './routes'
import { notFound, serverError } from './middleware'


export const createApp = (store: Store) => {
    const app = express();

    app.use(express.json())

    app.use(
        session({
            ...SESSION_OPTIONS, 
            store
        })
    )

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "http://79.122.2.40:3000"); // update to match the domain you will make the request from
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Credentials","true")
        next();
      });

    app.use(users)
    app.use(register)
    app.use(teszt)
    app.use(login)
    app.use(notFound)
    app.use(serverError)
    
   

return app
}

