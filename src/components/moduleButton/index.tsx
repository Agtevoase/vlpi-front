import cn from 'classnames'
import ModuleIcon from 'components/icons/module'
import { useState } from 'react'
import styles from './ModuleButton.module.scss'

export const enum ButtonType {
  Primary = 'primary',
  Success = 'success',
  Danger = 'danger',
  Secondary = 'secondary',
  Light = 'light',
  GhostLight = 'ghost-light',
}

interface Props {
  moduleName: string
  moduleDescription: string
  onClick?: () => void
}

const ModuleButton: React.FC<Props> = ({
  moduleName,
  moduleDescription,
  onClick,
  ...props
}) => {
  const [hover, setHover] = useState(false)

  // const hoverStyle = {filter: hover ? `drop-shadow( 0px 0px 6px ${shadowColor ?? 'white'})` : ''};

  return (
    <span
      onMouseEnter={() => {
        setHover(true)
      }}
      onMouseLeave={() => {
        setHover(false)
      }}
      tabIndex={0}
      role="button"

      className={cn({
        [styles.button]:true,
        [styles.disabledButton]:!onClick,
      })}
      onClick={onClick}
      onKeyDown={onClick}
      // style={{ ...hoverStyle}}
    >


      <div className={cn({
          [styles.nameHeader]:true,
          [styles.hoverHeader]:hover && onClick,
          [styles.disabledName]:!onClick,
        })}>
        <span className={styles.moduleIcon}>
          <ModuleIcon />
        </span>

        <span className={styles.name}>{moduleName}</span>
      </div>
      <div 
       className={cn({
        [styles.moduleDescription]:true,
        [styles.disabledDescription]:!onClick,
      })}>{moduleDescription}</div>
    </span>
  )
}

export default ModuleButton
