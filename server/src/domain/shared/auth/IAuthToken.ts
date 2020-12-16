export type UserParams = {
  name: string
  email: string
  discount: number
}

export interface IAuthToken {
  newToken({ email }: UserParams): Promise<string>
}
