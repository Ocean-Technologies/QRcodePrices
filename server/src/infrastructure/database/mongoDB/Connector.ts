import { MongoConnector } from '@infrastructure/database/mongoDB/MongoConnector'
import { MongoError } from './MongoError'
import { Mongoose } from 'mongoose'

export async function createMongoConnection(): Promise<Mongoose | undefined> {
  try {
    const Connected = MongoConnector.isConnected()
    if (Connected) {
      return MongoConnector.instance()
    }
    const client = await MongoConnector.Connect()
    return client
  } catch (err) {
    throw new MongoError(err)
  }
}
