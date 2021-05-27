import { RequestHandler, Request, Response, NextFunction } from "express"


export const catchAsync = (handler: RequestHandler) =>
  (...args: [Request, Response, NextFunction]) => {
      return Promise
      .resolve(handler(...args))
      .catch(args[2])
  }

export const notFound = (req: Request, res: Response, next: NextFunction) =>
  res.status(404).json({ message: 'Not Found' })

export const serverError = (err: any, req: Request, res: Response, next: NextFunction) => {
  if (!err.status) {
    console.error(err.stack)
  }

  res.status(err.status || 500)
    .json({status:err.status ,message: err.message || 'Internal Server Error' })

}