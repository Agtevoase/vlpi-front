import { useNavigate } from 'react-router-dom'

import BlurredContainer from 'common/blurred-container'
import ModuleButton from 'components/moduleButton'

import { Routes } from 'constants/routes'

import styles from './styles.module.scss'

const HomeContainer: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.container}>
      <BlurredContainer>
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
          onClick={() => navigate(Routes.exercises)}
        />
      </BlurredContainer>
    </div>
  )
}

export default HomeContainer
