import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import ExitIcon from 'components/icons/exit'
import HomeIcon from 'components/icons/home'
import ProfileIcon from 'components/icons/profile'
import NavBarButton from 'components/navBarButton'

import { Routes } from 'constants/routes'
import { logout } from 'store/auth/actions'
import { ReduxState } from 'store/types'

import styles from './NavBar.module.scss'

export const enum BlockType {
  Passed = 'passed',
  Failed = 'failed',
}

const NavBar: React.FC = () => {
  const name = useSelector((state: ReduxState) => state.auth.user?.name)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  if (!name) {
    return (
      <div className={styles.navBar}>
        <span className={styles.logo}>VLPI</span>
      </div>
    )
  }

  return (
    <div className={styles.navBar}>
      <span className={styles.home}>
        <NavBarButton onClick={() => navigate(Routes.home)}>
          <HomeIcon />
        </NavBarButton>
      </span>

      <span className={styles.logo}>VLPI</span>
      <span className={styles.userName}>{name}</span>

      <span className={styles.profile}>
        <NavBarButton onClick={() => navigate(Routes.profile)}>
          <ProfileIcon />
        </NavBarButton>
      </span>

      <span className={styles.exit}>
        <NavBarButton
          onClick={() => dispatch(logout())}
        >
          <ExitIcon />
        </NavBarButton>
      </span>
    </div>
  )
}

export default NavBar
