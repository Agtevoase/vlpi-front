import Choise from 'common/choise';
import { Draggable } from 'react-beautiful-dnd';
import { MyColunm } from 'store/exercise';
import { Choice, Column } from 'types/models';
import s from './styles.module.scss'

interface Props {
  column: MyColunm
}

const OneColumn: React.FC<Props> = ({ column }) => {

  return (
    <div className={s.column}>
      <h3>{column.title}</h3>
      {column.choise.map((c1, index) => {
        return (
          <div key={c1.id}>
            <Draggable key={c1.id} draggableId={c1.id.toString()} index={index}>
              {(provided1) => (
                <div ref={provided1.innerRef} {...provided1.draggableProps} {...provided1.dragHandleProps}>
                  <Choise choise={c1} key={c1.id} />
                </div>

              )}
            </Draggable>
          </div>
        );
      })}
    </div>
  )
}

export default OneColumn;
