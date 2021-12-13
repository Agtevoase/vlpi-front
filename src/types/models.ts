export interface User {
  id: number
  name: string
  email: string
}

export interface UserWithToken extends User {
  token: string
}
