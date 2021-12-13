import cn from 'classnames'

import styles from './styles.module.scss'

interface Props {
  className?: string
}

const BlurredContainer: React.FC<Props> = ({ className, children }) => (
  <div className={cn(className, styles.container)}>{children}</div>
)

export default BlurredContainer
