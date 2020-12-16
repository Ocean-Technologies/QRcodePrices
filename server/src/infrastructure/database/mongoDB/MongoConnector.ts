import { MongoClient, Db } from 'mongodb'
import { config } from './config'

export class MongoConnector {
  private static client = new MongoClient(config.uri, config.connectionOptions)

  public static async Connect(): Promise<Db | undefined> {
    this.client = await this.client.connect()
    return this.client.db(config.database)
  }

  public static async close(): Promise<void> {
    return await this.client.close()
  }

  public static isConnected(): boolean {
    const connected = this.client.isConnected()
    return connected
  }

  public static instance(): Db | undefined {
    return this.client.db(config.database)
  }
}
