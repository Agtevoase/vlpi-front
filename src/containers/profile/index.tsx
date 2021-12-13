import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'

import cn from 'classnames'
import BlurredContainer from 'common/blurred-container'
import Button, { ButtonType } from 'components/button'
import TextInput from 'components/inputs/text'
import { Routes } from 'constants/routes'
import { login } from 'store/auth/actions'

import styles from './styles.module.scss'

function timeText(minutes: number): string {
  if (minutes < 60) return `${minutes}m`

  return `${Math.floor(minutes / 60)}h ${minutes % 60}m`
}

const ProfileContainer: React.FC = () => {
  const dispatch = useDispatch()

  const tasksDone = 27
  const tasksLeft = 164
  const totalTasksAvailable = tasksDone + tasksLeft
  const userName = 'John Smith'
  const totalTimeSpent = timeText(tasksDone * 15)
  const averageScore = 84

  const markStyle = cn({
    [styles.statText]: true,
    [styles.green]: averageScore >= 80,
    [styles.red]: averageScore < 80,
  })

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <span className={styles.userName}>{userName}</span>
        <div className={styles.stat}>
          <span className={styles.leftStat}>
            <span
              className={styles.statText}
            >{`Total time spent: ${totalTimeSpent}`}</span>
            <span className={styles.statText} />
            <span className={styles.statText} />
            <span
              className={styles.statText}
            >{`Tasks done: ${tasksDone}`}</span>
            <span
              className={styles.statText}
            >{`Tasks left: ${tasksLeft}`}</span>
            <span
              className={styles.statText}
            >{`Total tasks available: ${totalTasksAvailable}`}</span>
          </span>

          <span className={styles.rightStat}>
            <span
              className={markStyle}
            >{`Average score: ${averageScore}%`}</span>
            <span className={styles.statText} />

            <span className={styles.statText}>Requirement score: -</span>
            <span className={styles.statText}>Design score: -</span>
            <span className={styles.statText}>Modelling score: -</span>
            <span
              className={markStyle}
            >{`Testing score: ${averageScore}%`}</span>
          </span>
        </div>

        <div className={styles.buttons}>
          <div className={styles.button1}>
            <Button
              type={ButtonType.GhostLight}
              onClick={() => console.log('1')}
              text="Back"
            />
          </div>
          <div className={styles.button2}>
            <Button
              type={ButtonType.GhostLight}
              onClick={() => console.log('1')}
              text="Log Out"
            />
          </div>
          <div className={styles.button3}>
            <Button
              type={ButtonType.Light}
              onClick={() => console.log('1')}
              text="Change Name"
            />
          </div>
          <div className={styles.button4}>
            <Button
              type={ButtonType.Light}
              onClick={() => console.log('1')}
              text="Change Password"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileContainer
