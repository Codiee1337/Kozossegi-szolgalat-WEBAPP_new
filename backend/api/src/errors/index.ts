abstract class HttpError extends Error {
    public status!: number
  }
  
  export class BadRequest extends HttpError {
    constructor (message = 'Bad Request') {
      super(message)
  
      this.status = 400
    }
  }
  
  

  export class InvalidEmail extends HttpError {
      constructor (message = 'Invalid email') {
       super(message)
       
       this.status = 500.1
       
      }
  }

  export class AlreadyLoggedIn extends HttpError {
    constructor (message = 'You are already logged in!') {
     super(message)
     
     this.status = 500.2
     
    }
}
export class Unauthorized extends HttpError {
    constructor (message = 'Incorrect email or password!') {
     super(message)
     
     this.status = 500.3
     
    }
}

export class NotLoggedIn extends HttpError {
    constructor (message = 'You must be logged in!') {
     super(message)
     
     this.status = 500.4
     
    }
}

export class NotAdmin extends HttpError {
  constructor (message = 'You are not an admin!') {
   super(message)
   
   this.status = 500.5
   
  }
}