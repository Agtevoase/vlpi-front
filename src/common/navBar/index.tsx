import cn from 'classnames'
import CancelIcon from 'components/icons/cancel'
import NavBarButton from 'components/navBarButton'

import styles from './Block.module.scss'

export const enum BlockType {
  Passed = 'passed',
  Failed = 'failed',
}

interface Props {
  userName?: string
}

const NavBar: React.FC<Props> = ({ userName }) => {
  let cancelButton

  if (userName) {
  }

  return (
    <NavBarButton
      onClick={() => {
        console.log('f')
      }}
    ></NavBarButton>
  )
}

export default NavBar
