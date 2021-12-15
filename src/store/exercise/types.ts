import { ReduxAction } from 'store/types'
import { Exercise, SubmitExercise } from 'types/models'
import { ExerciseResult } from '.'

export enum ExerciseActionType {
  FETCH_EXERCISE_BEGIN = '[exercise] FETCH_EXERCISE_BEGIN',
  FETCH_EXERCISE_SUCCESS = '[exercise] FETCH_EXERCISE_SUCCESS',
  FETCH_EXERCISE_ERROR = '[exercise] FETCH_EXERCISE_ERROR',
  SET_CHOICE = '[exercise] SET_CHOICE',
  FETCH_EXERCISE_RESULT = '[exercise] FETCH_EXERCISE_RESULT'
}

type FetchExerciseBegin = ReduxAction<ExerciseActionType.FETCH_EXERCISE_BEGIN>

type FetchExerciseSuccess = ReduxAction<
  ExerciseActionType.FETCH_EXERCISE_SUCCESS,
  Exercise
>

type FetchExerciseError = ReduxAction<
  ExerciseActionType.FETCH_EXERCISE_ERROR,
  Error
>

type FetchExerciseResult = ReduxAction<
  ExerciseActionType.FETCH_EXERCISE_RESULT,
  ExerciseResult
>

type SetChoice = ReduxAction<
  ExerciseActionType.SET_CHOICE,
  { choiceId: number, columnId: number, 
    sourceColunmId: number, sourceIndex: number, 
    destinationIndex: number}
>

export type ExerciseAction =
  | FetchExerciseBegin
  | FetchExerciseSuccess
  | FetchExerciseError
  | SetChoice
  | FetchExerciseResult
