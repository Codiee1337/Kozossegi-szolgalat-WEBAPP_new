import { Request, Response, NextFunction } from "express";
import { isLoggedIn } from '../auth'
import { AlreadyLoggedIn, NotLoggedIn } from "../errors";

export const guest = (req: Request, res: Response, next: NextFunction) => {


    if(isLoggedIn(req)){
        return next(new AlreadyLoggedIn("Már be vagy lépve!"))
    }

    next()
}

export const auth = (req: Request, res: Response, next: NextFunction) => {

    if(!isLoggedIn(req)){
        return next(new NotLoggedIn("Nem vagy belépve!"))
    }
    
    next()

}