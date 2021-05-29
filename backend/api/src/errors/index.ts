abstract class HttpError extends Error {
    public status!: number
    public message!: any
  }
  
  export class ValidationErrorCustom extends HttpError {
    constructor (message) {
      super(message)
      this.message = JSON.stringify(message)
      this.status = 400
    }
  }
  
  

  export class InvalidEmail extends HttpError {
    constructor (message) {
      super(message)
      this.message = JSON.stringify(message)
      this.status = 500.1
    }
  }

  export class AlreadyLoggedIn extends HttpError {
    constructor (message) {
      super(message)
      this.message = JSON.stringify(message)
      this.status = 500.2
    }
}
export class Unauthorized extends HttpError {
  constructor (message) {
    super(message)
    this.message = JSON.stringify(message)
    this.status = 500.3
  }
}

export class NotLoggedIn extends HttpError {
  constructor (message) {
    super(message)
    this.message = JSON.stringify(message)
    this.status = 500.4
  }
}

export class NotAdmin extends HttpError {
  constructor (message) {
    super(message)
    this.message = JSON.stringify(message)
    this.status = 500.5
  }
}