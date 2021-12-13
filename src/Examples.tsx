import TaskIcon from 'components/icons/task'
import Block, { BlockType } from 'components/block'
import OkIcon from 'components/icons/ok'
import FailedIcon from 'components/icons/failed'
import FailIcon from 'components/icons/fail'
import PassedIcon from 'components/icons/passed'
import DraftIcon from 'components/icons/draft'
import TextInput from 'components/inputs/text'
import Button, { ButtonType } from 'components/button'
import Mark from 'components/mark'
import NarBarButton from 'components/navBarButton'
import ExitIcon from 'components/icons/exit'
import ModuleButton from 'components/moduleButton'
import TaskItem from 'common/taskItem'
import TaskList from 'common/taskList'

// TODO: Delete later
const Examples = () => {
  return (
    <div>
      <OkIcon />
      <FailIcon />
      <FailedIcon />
      <PassedIcon />
      <DraftIcon />
      <TaskIcon taskNumber={1} passed={false} />
      <TaskIcon taskNumber={23} passed />
      <TaskIcon taskNumber={99} />
      <Block
        text="tt"
        onRemoveClick={() => console.log('f')}
        order={1}
        blockType={BlockType.Failed}
      />
      <Block
        text="tt"
        onRemoveClick={() => console.log('f')}
        order={1}
        blockType={BlockType.Passed}
      />
      <Block text="tt" onRemoveClick={() => console.log('f')} order={1} />
      <Block text="tt" onRemoveClick={() => console.log('f')} />
      <TextInput placeholder="placeholder text" />
      <TextInput placeholder="placeholder text1" error="Bad passwrod" />

      <Button
        type={ButtonType.Primary}
        onClick={() => console.log('1')}
        text="Primary Button"
      />
      <Button
        type={ButtonType.Secondary}
        onClick={() => console.log('1')}
        text="Secondary Button"
      />
      <Button
        type={ButtonType.Success}
        onClick={() => console.log('1')}
        text="Success Button"
      />
      <Button
        type={ButtonType.Danger}
        onClick={() => console.log('1')}
        text="Danger Button"
      />
      <Button
        type={ButtonType.GhostLight}
        onClick={() => console.log('1')}
        text="Ghost Light Button"
      />
      <Button
        type={ButtonType.Light}
        onClick={() => console.log('1')}
        text="Light Button"
      />

      <Mark markValue={70} minMark={80} />
      <Mark markValue={82} minMark={80} />
      <Mark markValue={99} minMark={100} />

      <ModuleButton
        moduleName="Requirements"
        moduleDescription="Test your skills in the ability
         to write software requirements ..."
      />

      <ModuleButton
        moduleName="Design"
        moduleDescription="Test your skills in the ability
         of designing software UI ..."
      />

      <ModuleButton
        moduleName="Modelling"
        moduleDescription="Test your skills in the ability
         of modelling software ..."
      />

      <ModuleButton
        moduleName="Coding"
        moduleDescription="Test your skills in the ability
         of coding ..."
      />

      <ModuleButton
        moduleName="Testing"
        moduleDescription="Test your skills in the ability
         of testing software functionality ..."
        onClick={() => console.log('1')}
      />

      <TaskList
        tasks={[
          { id: 1, number: 1, title: 'Task1', isDraft: true },
          { id: 2, number: 2, title: 'Task2', minMark: 80 },
          { id: 3, number: 3, title: 'Task3', minMark: 90, markValue: 86 },
          { id: 2, number: 4, title: 'Task2', minMark: 80 },
          { id: 3, number: 5, title: 'Task3', minMark: 90, markValue: 86 },
          { id: 3, number: 6, title: 'Task3', minMark: 90, markValue: 86 },
          { id: 3, number: 7, title: 'Task3', minMark: 90, markValue: 86 },
          { id: 3, number: 8, title: 'Task3', minMark: 90, markValue: 86 },
          { id: 4, number: 9, title: 'Task4', minMark: 95, markValue: 98 },
        ]}
        onClick={(id) => console.log(id)}
      />
      <div className="page" />
    </div>
  )
}

export default Examples
