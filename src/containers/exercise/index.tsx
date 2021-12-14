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
import { useState } from 'react'
import styles from './styles.module.css'

const ExerciseContainer: React.FC = () => {
  const { isLoading, exercise, columns } = useSelector((state: ReduxState) => state.exercise)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [submited, setSubmited] = useState(false);

  if (isLoading || !exercise?.choices || !exercise?.columns) return <Loader />

  const onDrag = (result: DropResult) => {
    if (submited) return;

    if (!result.destination) return;

    dispatch(action(ExerciseActionType.SET_CHOICE,
      {
        choiceId: parseInt(result.draggableId, 10),
        columnId: parseInt(result.destination.droppableId, 10),
        sourceColunmId: parseInt(result.source.droppableId, 10),
        sourceIndex: result.source.index,
        destinationIndex: result.destination.index
      }))
    console.log(result)
  }

  return (
    <div className={styles.container}>
      <h1>{exercise.title}</h1>
      <DragDropContext onDragEnd={onDrag}>
        <Droppable droppableId='-1'>
          {(provided: DroppableProvided) => (
            <div className={styles.choices} {...provided.droppableProps} ref={provided.innerRef}>
              {exercise.choices?.filter(c => c.columnId == null).map((c, index) => {
                return (
                  <Draggable key={c.id} draggableId={c.id.toString()} index={index}>
                    {(provided1) => (
                      <div ref={provided1.innerRef} {...provided1.draggableProps} {...provided1.dragHandleProps}>
                        <Choise choise={c} key={c.id} />
                      </div>

                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Columns columns={columns} choice={exercise?.choices} />
      </DragDropContext>
      <div className={styles.footer}>
        <button type='button' className={styles.btnCancle} onClick={() => {
          navigate(Routes.exercises)
        }}>Cancle</button>
        <button type='button' className={styles.btn} onClick={() => {
          const arr: ChoiceColumn[] = [];

          columns.map(c => {
            c.choise.map((c1, num) => {
              arr.push({ choiceId: c1.id, columnId: c.id, order: num + 1 });

              return c1;
            })

            return c;
          })

          if(arr.length === 0) {
            return;
          }
          
          const obj: SubmitExercise = {
            status: 'uploaded',
            exerciseId: exercise.id,
            choiceColumn: arr
          }

          setSubmited(true);
          dispatch(submitExercise(obj))
          navigate(Routes.exerciseResult)
        }}>Submit</button>
      </div>
    </div>
  )
}
// {exercise.choices?.map((c) => <Choise choise={c} key={c.id} />)}
export default ExerciseContainer
