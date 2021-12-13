import BlurredContainer from 'common/blurred-container'
import Button, { ButtonType } from 'components/button'
import TextInput from 'components/inputs/text'
import { Routes } from 'constants/routes'
import { Link } from 'react-router-dom'

import styles from './styles.module.scss'

const LoginContainer: React.FC = () => {
  return (
    <div className={styles.container}>
      <BlurredContainer className={styles.blurredContainer}>
        <h1>Login</h1>
        <form>
          <TextInput label="Username" className={styles.textInput} />
          <TextInput
            label="Password"
            type="password"
            className={styles.textInput}
          />
          <div className={styles.noAccount}>
            Don&apos;t have an account?{' '}
            <Link to={Routes.register}>Register</Link>
          </div>
          <Button
            type={ButtonType.Primary}
            onClick={() => undefined}
            text="Login"
          />
        </form>
      </BlurredContainer>
    </div>
  )
}

export default LoginContainer
