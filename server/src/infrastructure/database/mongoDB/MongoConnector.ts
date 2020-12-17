import { Connection, Mongoose } from 'mongoose'
import { config } from './config'

export class MongoConnector {
  private static database: Connection | undefined
  private static mongooseClient: Mongoose

  public static async Connect(): Promise<Mongoose | undefined> {
    this.mongooseClient = await new Mongoose().connect(
      config.uri,
      config.connectionOptions,
    )
    this.database = this.mongooseClient.connection
    this.database.once('open', async () => {
      console.log('Connected to database')
    })
    this.database.on('error', () => {
      console.log('Error connecting to database')
    })
    return this.mongooseClient
  }

  public static async close(): Promise<void> {
    if (!this.database) {
      return
    }
    this.mongooseClient.disconnect()
  }

  public static isConnected(): boolean {
    return !!this.database
  }

  public static instance(): Mongoose | undefined {
    return this.mongooseClient
  }
}
