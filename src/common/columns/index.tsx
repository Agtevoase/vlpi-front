import OneColumn from 'common/column'
import { Choice, Column } from 'types/models'
import {
  DropResult,
  DragDropContext,
  Droppable,
  Draggable,
  DroppableProvided,
} from 'react-beautiful-dnd'
import Choise from 'common/choise'
import { MyColunm } from 'store/exercise'
import s from './styles.module.scss'

interface Props {
  columns: MyColunm[]
  choice: Choice[]
}

const Columns: React.FC<Props> = ({ columns, choice }) => {
  return (
    <div className={s.columns}>
      {columns.map((c, key) => (
        <div key={c.id}>
          <div className={s.dropable}>
            <Droppable droppableId={key.toString()} key={c.id}>
              {(provided) => (
                <div className={s.column}>
                  <OneColumn column={c} provided={provided} />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Columns
