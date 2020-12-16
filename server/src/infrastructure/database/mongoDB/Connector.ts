import { MongoConnector } from '@infrastructure/database/mongoDB/MongoConnector'
import { MongoError } from './MongoError'
import { Db } from 'mongodb'

export async function createMongoConnection(): Promise<Db | undefined> {
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
