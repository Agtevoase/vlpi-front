import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import cn from 'classnames'
import Loader from 'common/loader'

import Block, { BlockType } from 'components/block'
import Mark from 'components/mark'
import { ReduxState } from 'store/types'
import { Routes } from 'constants/routes'

import Button, { ButtonType } from 'components/button'
import TaskIcon from 'components/icons/task'
import PassedIcon from 'components/icons/passed'
import FailedIcon from 'components/icons/failed'
import s from './styles.module.scss'

function getBlockType(isCorrect: boolean | undefined): BlockType | undefined {
  if (isCorrect !== undefined) {
    return isCorrect ? BlockType.Passed : BlockType.Failed
  }

  return undefined
}

const ExerciseResultContainer: React.FC = () => {
  const { isLoading, exercise, exerciseResult, choices } = useSelector(
    (state: ReduxState) => state.exercise,
  )

  const { list } = useSelector((state: ReduxState) => state.exercises)

  const totalTasks = list?.length
  const nextId = (exercise?.id ?? 0) + 1
  const hasMoreTasks = nextId - 1 < (totalTasks ?? 0)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  if (isLoading || !exerciseResult || !exerciseResult.columns) return <Loader />

  const getChoice = (id: number) => {
    return choices?.find((c) => c.id === id)
  }
  const getColumn = (id: number) => {
    const col = exercise?.columns?.find((c) => c.id === id)

    console.log(col, id)

    return col?.title
  }
  let passIcon

  const passed = exerciseResult.mark > (exercise?.minMark ?? 100)

  if (exercise?.minMark) {
    if (exerciseResult.mark > exercise?.minMark) {
      passIcon = <PassedIcon />
    } else {
      passIcon = <FailedIcon />
    }
  }

  return (
    <div className="background">
      <div className={s.main}>
        <div className={s.titleBox}>
          <TaskIcon taskNumber={exercise?.id} passed={passed} />
          <div
            className={cn({
              [s.taskTitle]: true,
              [s.red]: !passed,
              [s.green]: passed,
            })}
          >
            {exercise?.title}
          </div>
          <Mark
            markValue={exerciseResult.mark}
            minMark={exercise?.minMark ?? 100}
          />
        </div>

        <div className={s.result}>
          {exerciseResult?.columns.map((column) => {
            return (
              <div className={s.column} key={column.columnId}>
                <span className={s.title}>{getColumn(column.columnId)}</span>
                <div className={s.box}>
                  <div className={s.scrollBox}>
                    {column.passings.map((passing, index) => {
                      return (
                        <div key={passing.id}>
                          <Block
                            text={getChoice(passing.choiceId)?.title ?? ''}
                            order={index + 1}
                            blockType={getBlockType(passing.isCorrect)}
                          />
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className={s.footer}>
          <Button
            width={130}
            type={ButtonType.GhostLight}
            onClick={() => {
              navigate(Routes.exercises)
            }}
            text="Back"
          />

          <div>
            <Button
              width={130}
              type={ButtonType.Primary}
              onClick={() => {
                navigate(Routes.exercise.replace('[id]', `${exercise?.id}`))
              }}
              text="Retry"
            />

            <span className={s.btn2}>
              <Button
                width={180}
                type={ButtonType.Success}
                onClick={() => {
                  if (hasMoreTasks) {
                    navigate(Routes.exercise.replace('[id]', `${nextId}`))
                  } else {
                    navigate(Routes.home)
                  }
                }}
                text={hasMoreTasks ? 'Continue' : 'Done'}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
// {exercise.choices?.map((c) => <Choise choise={c} key={c.id} />)}
export default ExerciseResultContainer
