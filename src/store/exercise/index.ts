/* eslint-disable eqeqeq */
import { Choice, Column, Exercise } from 'types/models'
import { ExerciseAction, ExerciseActionType } from './types'

export interface MyColunm {
  choise: Choice[]
  id: number,
  title: string,
  maxChoices: number
}

export interface Passing {
  id: number
  choiceId: number
  columnId: number
  passingId: number
  order: number
  createdAt: string
  updatedAt: string
  isCorrect: boolean
}

export interface ExerciseResultColumn {
  columnId: number
  isCorrect: boolean
  passings: Passing[]
}

export interface ExerciseResult {
  id: number,
  userId: number
  exerciseId: number

  status: string
  mark: number
  createdAt: string
  updatedAt: string
  columns: ExerciseResultColumn[]
}

interface State {
  exercise: Exercise | null
  exerciseResult: ExerciseResult | null
  choices: Choice[] | null
  columns: MyColunm[]
  active: Exercise | null
  isLoading: boolean
  error: string | null
}

const initialState: State = {
  exercise: null,
  exerciseResult: null,
  choices: null,
  columns: [],
  active: null,
  isLoading: false,
  error: null,
}

const reducer = (state = initialState, action: ExerciseAction): State => {
  switch (action.type) {
    case ExerciseActionType.FETCH_EXERCISE_BEGIN: {
      return {
        ...state,
        isLoading: true,
        error: null,
      }
    }

    case ExerciseActionType.FETCH_EXERCISE_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
      }
    }
    case ExerciseActionType.FETCH_EXERCISE_RESULT: {
      return {
        ...state,
        isLoading: false,
        exerciseResult: action.payload
      }
    }
    case ExerciseActionType.FETCH_EXERCISE_SUCCESS: {
      console.log(action.payload);

      const obj = action.payload;

      obj.choices = obj.choices?.map(c => {
        const temp = c;

        temp.columnId = null;

        return temp;
      });

      const col: MyColunm[] = [];

      if (action.payload.columns)
        for (let i = 0; i < action.payload.columns?.length; i += 1) {
          col.push({ 
            choise: [], 
            id: action.payload.columns[i].id, 
            title: action.payload.columns[i].title,
            maxChoices: action.payload.columns[i].maxChoices
          })
        }

      return {
        ...state,
        isLoading: false,
        exercise: obj,
        columns: col,
        choices: obj.choices ? obj.choices : null
        
      }
    }

    case ExerciseActionType.SET_CHOICE: {
      console.log(action.payload);



      let ex = state.exercise;

      const c = state.columns;

      if (ex != null) {

        // if (state.columns.length == 0 && state.exercise?.columns) {
        //   for (let i = 0; i < state.exercise?.columns?.length; i += 1) {
        //     console.log('new')
        //     c?.push({ choise: [], id: i })
        //     console.log(c[i]);
        //   }
        // }
        if (action.payload.sourceColunmId === -1 && action.payload.columnId === -1) {
          const items = state.exercise?.choices;

          if (items) {
            const [reorderedItem] = items.splice(action.payload.sourceIndex, 1);

            items.splice(action.payload.destinationIndex, 0, reorderedItem);
          }
        }
        else if (action.payload.sourceColunmId === action.payload.columnId) {
          const items = state.columns[action.payload.sourceColunmId].choise;
          const [reorderedItem] = items.splice(action.payload.sourceIndex, 1);

          items.splice(action.payload.destinationIndex, 0, reorderedItem);
        } else if (action.payload.columnId !== -1 && action.payload.sourceColunmId === -1) {
          const choice = state.exercise?.choices?.find(c1 => c1.id === action.payload.choiceId);

          ex.choices = state.exercise?.choices?.filter(c1 => c1.id !== action.payload.choiceId);

          if (c != null && choice != null) {

            if (c[action.payload.columnId]) {
              console.log("add")
              c[action.payload.columnId].choise.push(choice);
            }
          }
        } else if (action.payload.columnId !== -1 && action.payload.sourceColunmId !== -1) {
          const choice = state.columns[action.payload.sourceColunmId]
            .choise?.find(c1 => c1.id === action.payload.choiceId);

          c[action.payload.sourceColunmId].choise = c[action.payload.sourceColunmId]
            .choise.filter(c1 => c1.id !== action.payload.choiceId);

          if(choice) {
            c[action.payload.columnId].choise.push(choice);
          }
          
        }
         else {
          const choice = state.columns[action.payload.sourceColunmId]
            .choise?.find(c1 => c1.id === action.payload.choiceId);

          c[action.payload.sourceColunmId].choise = c[action.payload.sourceColunmId]
            .choise.filter(c1 => c1.id !== action.payload.choiceId);

          if (choice)
            ex.choices?.push(choice);
        }


      } else {
        ex = null;


      }

      //   if (action.payload.columnId === action.payload.sourceColunmId) {

      //     ex.choices = ex?.choices?.map(choice => {
      //       const result = choice;

      //       if (result.id === action.payload.choiceId) {
      //         result.columnId = action.payload.columnId === -1 ? null
      //           : action.payload.columnId;
      //       }

      //       return result;
      //     })
      //   }


      return {
        ...state,
        isLoading: false,
        exercise: ex,
        columns: c
      }
    }

    default:
      return state
  }
}

export default reducer
