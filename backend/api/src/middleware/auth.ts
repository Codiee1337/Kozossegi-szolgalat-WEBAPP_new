import { Request, Response, NextFunction } from "express";
import { isLoggedIn } from '../auth'
import { AlreadyLoggedIn, NotLoggedIn } from "../errors";

export const guest = (req: Request, res: Response, next: NextFunction) => {


    if(isLoggedIn(req)){
        return next(new AlreadyLoggedIn())
    }

    next()
}

export const auth = (req: Request, res: Response, next: NextFunction) => {

    if(!isLoggedIn(req)){
        return next(new NotLoggedIn())
    }
    
    next()

}