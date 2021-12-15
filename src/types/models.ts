import { ExerciseResultColumn } from "store/exercise";

export interface User {
  id: number
  name: string
  email: string
}

export interface UserWithToken {
  token: string
  user: User
}

export interface FullUser extends User {
  avatar: string
  statistics: {
    averageDoneMark: number | null
    averageMark: number | null
    exercisesDone: number
    exercisesLeft: number
  }
}

export interface Choice {
  id: number,
  exerciseId: number,
  title: string,
  tooltip: null,
  createdAt: string,
  updatedAt: string,
  columnId?: number | null
}

export interface Column {
  id: number,
  exerciseId: number,
  title: string,
  maxChoices: number,
  createdAt: string,
  updatedAt: string,
  
}

export interface ChoiceColumn {
  choiceId: number,
  columnId: number,
  order: number    
}

export interface SubmitExercise {
  status: string,
  exerciseId: number,
  choiceColumn: ChoiceColumn[]
}

export interface Statistics {
  bestMark: number,
  hasPassed: boolean
}

export interface BestGraded{
  id: number
  userId: number
  exerciseId: number
  status: string
  mark: number
  createdAt: string
  updatedAt: string
  columns: ExerciseResultColumn[]
}

export interface Exercise {
  id: number
  userId: number
  title: string
  description: string
  maxChoices: number
  type: 'ordering' | 'grouping'
  minMark: number
  bestGraded: BestGraded
  statistics: Statistics
  choices?: Choice[]
  columns?: Column[]
  user?: User
}
