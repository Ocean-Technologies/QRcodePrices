export class MongoError extends Error {
  constructor(message?: string) {
    super(message)
    this.name = 'MongoError'
    Object.setPrototypeOf(this, new.target.prototype)
  }
}
