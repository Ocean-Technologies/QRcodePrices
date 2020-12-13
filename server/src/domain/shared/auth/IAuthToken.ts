export type UserParams = {
  name: string
  email: string
  password: string
  discount: number
}

export interface IAuthToken {
  newToken({ password, email }: UserParams): Promise<string>
}
