import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Loader from 'common/loader'

import Block from 'components/block'
import Button, { ButtonType } from 'components/button'
import { ReduxState } from 'store/types'
import { Routes } from 'constants/routes'
import {
  DropResult,
  DragDropContext,
  Droppable,
  Draggable,
  DroppableProvided,
} from 'react-beautiful-dnd'
import TaskIcon from 'components/icons/task'
import Columns from 'common/columns'
import { action } from 'store'
import { ExerciseActionType } from 'store/exercise/types'
import { ChoiceColumn, SubmitExercise } from 'types/models'
import { submitExercise } from 'store/exercise/actions'
import { useState } from 'react'
import styles from './styles.module.scss'

const ExerciseContainer: React.FC = () => {
  const { isLoading, exercise, columns } = useSelector(
    (state: ReduxState) => state.exercise,
  )
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [submited, setSubmited] = useState(false)

  if (isLoading || !exercise?.choices || !exercise?.columns) return <Loader />

  const onDrag = (result: DropResult) => {
    if (submited) return

    if (!result.destination) return

    dispatch(
      action(ExerciseActionType.SET_CHOICE, {
        choiceId: parseInt(result.draggableId, 10),
        columnId: parseInt(result.destination.droppableId, 10),
        sourceColunmId: parseInt(result.source.droppableId, 10),
        sourceIndex: result.source.index,
        destinationIndex: result.destination.index,
      }),
    )
    console.log(result)
  }

  return (
    <div className="background">
      <div className={styles.container}>
        <div className={styles.titleBox}>
          <TaskIcon taskNumber={exercise.id} />
          <div className={styles.title}>{exercise.title}</div>
        </div>

        <DragDropContext onDragEnd={onDrag}>
          <span className={styles.blocks}>
            <Droppable droppableId="-1">
              {(provided: DroppableProvided) => (
                <div
                  className={styles.frame}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  <div className={styles.scrollBoxFrame}>
                    <div className={styles.scrollBox}>
                      <div className={styles.box}>
                        {exercise.choices
                          ?.filter((c) => c.columnId == null)
                          .map((c, index) => {
                            return (
                              <Draggable
                                key={c.id}
                                draggableId={c.id.toString()}
                                index={index}
                              >
                                {(provided1) => (
                                  <div
                                    ref={provided1.innerRef}
                                    {...provided1.draggableProps}
                                    {...provided1.dragHandleProps}
                                  >
                                    <span key={c.id}>
                                      <Block
                                        text={c.title}
                                        onRemoveClick={() => {
                                          console.log('')
                                        }}
                                      />
                                    </span>
                                  </div>
                                )}
                              </Draggable>
                            )
                          })}
                        {provided.placeholder}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Droppable>
          </span>
          <Columns columns={columns} choice={exercise?.choices} />
        </DragDropContext>
        <div className={styles.footer}>
          <Button
            type={ButtonType.Danger}
            onClick={() => {
              navigate(Routes.exercises)
            }}
            text="Clear and Exit"
          />

          <Button
            type={ButtonType.Success}
            onClick={() => {
              const arr: ChoiceColumn[] = []

              columns.map((c) => {
                c.choise.map((c1, num) => {
                  arr.push({ choiceId: c1.id, columnId: c.id, order: num + 1 })

                  return c1
                })

                return c
              })

              if (!columns.every((x) => x.choise.length > 0)) {
                alert('Fill all columns')
                
                return
              }

              if (arr.length === 0) {
                return
              }

              const obj: SubmitExercise = {
                status: 'uploaded',
                exerciseId: exercise.id,
                choiceColumn: arr,
              }

              setSubmited(true)
              dispatch(submitExercise(obj))
              navigate(Routes.exerciseResult)
            }}
            text="Submit"
          />
        </div>
      </div>
    </div>
  )
}
// {exercise.choices?.map((c) => <Choise choise={c} key={c.id} />)}
export default ExerciseContainer
