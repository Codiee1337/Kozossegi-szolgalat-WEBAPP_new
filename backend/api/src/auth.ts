import { Request, Response } from 'express'
import { SESSION_NAME } from './config'

declare module 'express-session' {
    export interface Session{
        userId: string;
        role: string;
    }
  }

export const isLoggedIn = (req:Request) => !!req.session!.userId



export const logIn = (req: Request, userId: string, role: string)=>{

    req.session!.userId = userId
    req.session!.role = role

}

export const logOut = (req: Request, res: Response) =>
  new Promise<void>((resolve, reject) => {
    req.session!.destroy((err: Error) => {
      if (err) reject(err)

      res.clearCookie(SESSION_NAME)

      resolve()
    })
  })


