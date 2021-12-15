import { ReduxAction } from 'store/types'
import { Exercise } from 'types/models'

export enum ExercisesActionType {
  FETCH_EXERCISES_BEGIN = '[exercise] FETCH_EXERCISES_BEGIN',
  FETCH_EXERCISES_SUCCESS = '[exercise] FETCH_EXERCISES_SUCCESS',
  FETCH_EXERCISES_ERROR = '[exercise] FETCH_EXERCISES_ERROR',
}

type FetchExerciseBegin = ReduxAction<ExercisesActionType.FETCH_EXERCISES_BEGIN>

type FetchExerciseSuccess = ReduxAction<
  ExercisesActionType.FETCH_EXERCISES_SUCCESS,
  Exercise[]
>

type FetchExerciseError = ReduxAction<
  ExercisesActionType.FETCH_EXERCISES_ERROR,
  Error
>

export type ExerciseAction =
  | FetchExerciseBegin
  | FetchExerciseSuccess
  | FetchExerciseError
