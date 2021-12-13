import { ReduxAction } from 'store/types'
import { Exercise } from 'types/models'

export enum ExerciseActionType {
  FETCH_EXERCISES_BEGIN = '[exercise] FETCH_EXERCISES_BEGIN',
  FETCH_EXERCISES_SUCCESS = '[exercise] FETCH_EXERCISES_SUCCESS',
  FETCH_EXERCISES_ERROR = '[exercise] FETCH_EXERCISES_ERROR',
}

type FetchExerciseBegin = ReduxAction<ExerciseActionType.FETCH_EXERCISES_BEGIN>

type FetchExerciseSuccess = ReduxAction<
  ExerciseActionType.FETCH_EXERCISES_SUCCESS,
  Exercise[]
>

type FetchExerciseError = ReduxAction<
  ExerciseActionType.FETCH_EXERCISES_ERROR,
  Error
>

export type ExerciseAction =
  | FetchExerciseBegin
  | FetchExerciseSuccess
  | FetchExerciseError
