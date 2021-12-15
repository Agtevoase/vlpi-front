import cn from 'classnames'
import CancelIcon from 'components/icons/cancel'

import styles from './Block.module.scss'

export const enum BlockType {
    Passed = 'passed',
    Failed = 'failed'
}


interface Props {
  order?: number
  text: string
  blockType?: BlockType
  onRemoveClick?: () => void 
}

const Block: React.FC<Props> = ({ order, text, blockType, onRemoveClick }) => {
    let cancelButton;

    if(order !== undefined && blockType === undefined){
        cancelButton =  <div  tabIndex={0} role = "button" className={styles.cancelIcon} 
         onClick={() =>  {if(onRemoveClick){onRemoveClick()}}}
        onKeyDown={() => {if(onRemoveClick){onRemoveClick()}}} >
         <CancelIcon />
       </div>
    }

  return (
    <span 
        className={cn({
        [styles.block]: true,
        [styles[blockType??'']]: true,
      })}> 
      <div className={styles.text}>{`
        ${order ?? ''} 
        ${order !== undefined ? ':' : ''} 
        ${text}`}</div>

        {cancelButton}

    </span>
  )
}

export default Block
