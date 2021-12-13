import { useDispatch, useSelector } from 'react-redux'
import cn from 'classnames'

import Loader from 'common/loader'
import Button, { ButtonType } from 'components/button'

import { Routes } from 'constants/routes'
import { logout } from 'store/auth/actions'
import { ReduxState } from 'store/types'

import styles from './styles.module.scss'

function timeText(minutes: number): string {
  if (minutes < 60) return `${minutes}m`

  return `${Math.floor(minutes / 60)}h ${minutes % 60}m`
}

const ProfileContainer: React.FC = () => {
  const { profile } = useSelector((state: ReduxState) => state.auth)
  const dispatch = useDispatch()

  if (!profile) {
    return <Loader />
  }

  const { exercisesDone, exercisesLeft, averageMark } = profile.statistics
  const { name } = profile

  const totalTasksAvailable = exercisesDone + exercisesLeft
  const totalTimeSpent = timeText(exercisesDone * 15)

  const markStyle = cn({
    [styles.statText]: true,
    [styles.green]: (averageMark ?? 0) >= 80,
    [styles.red]: (averageMark ?? 0) < 80,
  })

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <span className={styles.userName}>{name}</span>
        <div className={styles.stat}>
          <span className={styles.leftStat}>
            <span
              className={styles.statText}
            >{`Total time spent: ${totalTimeSpent}`}</span>
            <span className={styles.statText} />
            <span className={styles.statText} />
            <span
              className={styles.statText}
            >{`Tasks done: ${exercisesDone}`}</span>
            <span
              className={styles.statText}
            >{`Tasks left: ${exercisesLeft}`}</span>
            <span
              className={styles.statText}
            >{`Total tasks available: ${totalTasksAvailable}`}</span>
          </span>

          <span className={styles.rightStat}>
            <span className={markStyle}>{`Average score: ${
              averageMark ?? 0
            }%`}</span>
            <span className={styles.statText} />

            <span className={styles.statText}>Requirement score: -</span>
            <span className={styles.statText}>Design score: -</span>
            <span className={styles.statText}>Modelling score: -</span>
            <span className={markStyle}>{`Testing score: ${
              averageMark ?? 0
            }%`}</span>
          </span>
        </div>

        <div className={styles.buttons}>
          <div className={styles.button1}>
            <Button
              type={ButtonType.GhostLight}
              onClick={() => window.history.back()}
              text="Back"
            />
          </div>
          <div className={styles.button2}>
            <Button
              type={ButtonType.GhostLight}
              onClick={() => dispatch(logout())}
              text="Log Out"
            />
          </div>
          {/* <div className={styles.button3}>
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
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default ProfileContainer
