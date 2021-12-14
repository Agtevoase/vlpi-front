import { Choice } from 'types/models';

import s from './choise.module.css'

interface Props {
  choise: Choice | undefined,
  style?: string
}

const Choise: React.FC<Props> = ({ style, choise }) => {
  if(typeof(choise) === 'undefined' || !choise) return null;

  return (
    <div className={`${s.choise  } ${  style}`}>
      
        {choise.title}

    </div>
  )
}

export default Choise;
