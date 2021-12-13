export interface User {
  id: number
  name: string
  email: string
}

export interface UserWithToken {
  token: string
  user: User
}

export interface Exercise {
  id: number
  userId: number
  title: string
  description: string
  maxChoices: number
  type: 'ordering' | 'grouping'
  minMark: number
}
