import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Loader from 'common/loader'

import { ReduxState } from 'store/types'
import { Routes } from 'constants/routes'
import { DropResult, DragDropContext, Droppable, Draggable, DroppableProvided } from 'react-beautiful-dnd';
import ChoiseList from 'common/choiseList'
import Choise from 'common/choise'
import Columns from 'common/columns'
import { action } from 'store'
import { ExerciseActionType } from 'store/exercise/types'
import { postExercise } from 'services/api/exercises'
import { ChoiceColumn, SubmitExercise } from 'types/models'
import { submitExercise } from 'store/exercise/actions'
import OneColumn from 'common/column'
import PassedIcon from 'components/icons/passed'
import FailedIcon from 'components/icons/failed'
import s from './styles.module.scss'

const ExerciseResultContainer: React.FC = () => {
  const { isLoading, exercise, columns, exerciseResult, choices } = useSelector((state: ReduxState) => state.exercise)
  const dispatch = useDispatch();
  const navigate = useNavigate()

  if (isLoading || !exerciseResult || !exerciseResult.columns) return <Loader />

  const getChoice = (id: number) => {
    return choices?.find(c => c.id === id);
  }
  const getColumn = (id: number) => {
    const col = exercise?.columns?.find(c => c.id === id);

    console.log(col, id)

    return col?.title;
  }
  let passIcon;

  if (exercise?.minMark) {
    if (exerciseResult.mark > exercise?.minMark) {
      passIcon = <PassedIcon />
    } else {
      passIcon = <FailedIcon />
    }
  }

  return (
    <div className={s.main}>
      <div>
        <h3>{exercise?.title}</h3>
        <p>min. Mark: {exercise?.minMark}%</p>
        <div className={s.mark}>
          <p>Mark: {exerciseResult.mark}%</p>
          <div>{passIcon}</div>
        </div>
      </div>
      <div className={s.result}>
        {exerciseResult?.columns.map(column => {
          return (
            <div className={s.column} key={column.columnId}>
              <h3>
                {
                  getColumn(column.columnId)
                }
              </h3>
              {column.passings.map(passing => {
                return (
                  <div className={s.choice} key={passing.id}>
                    <Choise style={passing.isCorrect ? s.correct : s.wrong} choise={getChoice(passing.choiceId)} />
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}
// {exercise.choices?.map((c) => <Choise choise={c} key={c.id} />)}
export default ExerciseResultContainer
