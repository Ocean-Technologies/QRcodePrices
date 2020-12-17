import { IUserDocument, IUserModel } from './users.types'

export async function findByEmail(
  this: IUserModel,
  email: string,
): Promise<IUserDocument | null> {
  const record = await this.findOne({ email })
  return record
}
