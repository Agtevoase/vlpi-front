import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'

import BlurredContainer from 'common/blurred-container'
import Button, { ButtonType } from 'components/button'
import TextInput from 'components/inputs/text'
import { Routes } from 'constants/routes'
import { login } from 'store/auth/actions'

import styles from './styles.module.scss'

interface FormValues {
  email: string
  password: string
}

const LoginContainer: React.FC = () => {
  const dispatch = useDispatch()

  const initialValues: FormValues = {
    email: '',
    password: '',
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string().email(),
    password: Yup.string(),
  })

  const onSubmit = (values: FormValues) => {
    try {
      dispatch(login(values.email, values.password))
    } catch (error) {
      console.log(error)
    }
  }

  const formik = useFormik({ initialValues, validationSchema, onSubmit })

  return (
    <div className={styles.container}>
      <BlurredContainer className={styles.blurredContainer}>
        <h1>Login</h1>
        <form onSubmit={formik.handleSubmit}>
          <TextInput
            label="Username"
            className={styles.textInput}
            {...formik.getFieldProps('email')}
          />
          <TextInput
            label="Password"
            type="password"
            className={styles.textInput}
            {...formik.getFieldProps('password')}
          />
          <div className={styles.noAccount}>
            Don&apos;t have an account?{' '}
            <Link to={Routes.register}>Register</Link>
          </div>
          <Button
            type={ButtonType.Primary}
            onClick={() => undefined}
            text="Login"
            submit
          />
        </form>
      </BlurredContainer>
    </div>
  )
}

export default LoginContainer
