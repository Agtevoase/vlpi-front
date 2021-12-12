
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



// TODO: Delete later
const Examples = () => {

  return (
    <div>
        <OkIcon/>
        <FailIcon/>
        <FailedIcon/>
        <PassedIcon/>
        <DraftIcon/>
        <TaskIcon taskNumber={1} passed={false}/>
        <TaskIcon taskNumber={23} passed/>
        <TaskIcon taskNumber={99}/>
        <Block text='tt' onRemoveClick={()=>console.log('f')}  order={1} blockType={BlockType.Failed}/>
        <Block text='tt' onRemoveClick={()=>console.log('f')}  order={1} blockType={BlockType.Passed}/>
        <Block text='tt' onRemoveClick={()=>console.log('f')} order={1}/>
        <Block text='tt' onRemoveClick={()=>console.log('f')} />
        <TextInput placeholder='placeholder text'/>
        <TextInput placeholder='placeholder text1' error='Bad passwrod'/>

        <Button type={ButtonType.Primary} onClick={ () => console.log('1')} text='Primary Button'/>
        <Button type={ButtonType.Secondary} onClick={ () => console.log('1')} text='Secondary Button'/>
        <Button type={ButtonType.Success} onClick={ () => console.log('1')} text='Success Button'/>
        <Button type={ButtonType.Danger} onClick={ () => console.log('1')} text='Danger Button'/>
        <Button type={ButtonType.GhostLight} onClick={ () => console.log('1')} text='Ghost Light Button'/>
        <Button type={ButtonType.Light} onClick={ () => console.log('1')} text='Light Button'/>

        <Mark markValue={70} minMark={80}/>
        <Mark markValue={82} minMark={80}/>
        <Mark markValue={99} minMark={100}/>
        <div className="page" />
    
    </div>
  )
}

export default Examples
