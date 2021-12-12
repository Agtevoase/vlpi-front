import { useParams } from 'react-router-dom'

interface Props {
  id: number
}

const ExercisePage: React.FC<Props> = () => {
  const { id } = useParams()

  return null
}

export default ExercisePage
