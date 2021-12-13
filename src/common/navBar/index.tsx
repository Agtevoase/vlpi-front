import cn from 'classnames'
import CancelIcon from 'components/icons/cancel'
import ExitIcon from 'components/icons/exit'
import HomeIcon from 'components/icons/home'
import ProfileIcon from 'components/icons/profile'
import NavBarButton from 'components/navBarButton'

import styles from './NavBar.module.scss'

export const enum BlockType {
  Passed = 'passed',
  Failed = 'failed',
}

interface Props {
  userName?: string
}

const NavBar: React.FC<Props> = ({ userName }) => {
  if (!userName) {
    return (
      <div className={styles.navBar}>
        {' '}
        <span className={styles.logo}>VLPI</span>
      </div>
    )
  }

  return (
    <div className={styles.navBar}>
      <span className={styles.home}>
        <NavBarButton
          onClick={() => {
            console.log('f')
          }}
        >
          <HomeIcon />
        </NavBarButton>
      </span>

      <span className={styles.logo}>VLPI</span>
      <span className={styles.userName}>{userName}</span>

      <span className={styles.profile}>
        <NavBarButton
          onClick={() => {
            console.log('f')
          }}
        >
          <ProfileIcon />
        </NavBarButton>
      </span>

      <span className={styles.exit}>
        <NavBarButton
          onClick={() => {
            console.log('f')
          }}
        >
          <ExitIcon />
        </NavBarButton>
      </span>
    </div>
  )
}

export default NavBar
