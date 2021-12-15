import Choise from 'common/choise'
import Block from 'components/block'
import { Draggable, DroppableProvided } from 'react-beautiful-dnd'
import { MyColunm } from 'store/exercise'
import s from './styles.module.scss'

interface Props {
  column: MyColunm
  provided: DroppableProvided
}

const OneColumn: React.FC<Props> = ({ column, provided }) => {
  return (
    <div className={s.column}>
      <span className={s.title}>{column.title}</span>
      <div className={s.columnBox}>
        <div className={s.blocksBox}>
          <div
            className={s.scrollBox}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {column.choise.map((c1, index) => {
              return (
                <div key={c1.id}>
                  <Draggable
                    key={c1.id}
                    draggableId={c1.id.toString()}
                    index={index}
                  >
                    {(provided1) => (
                      <div
                        ref={provided1.innerRef}
                        {...provided1.draggableProps}
                        {...provided1.dragHandleProps}
                      >
                        <Block
                          text={c1.title}
                          key={c1.id}
                          onRemoveClick={() => console.log('1')}
                          order={index + 1}
                        />
                      </div>
                    )}
                  </Draggable>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OneColumn
