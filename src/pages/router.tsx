import { useSelector } from 'react-redux'
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes as Switch,
} from 'react-router-dom'

import NavBar from 'common/navBar'

import { ReduxState } from 'store/types'
import { Routes, getRouterPath } from 'constants/routes'

import LoginPage from './login'
import RegisterPage from './register'
import HomePage from '.'
import ProfilePage from './profile'
import ExercisePage from './exercises/id'
import ExercisesPage from './exercises'
import ExerciseResult from './exerciseResult'

const Router: React.FC = () => {
  const { token } = useSelector((state: ReduxState) => state.auth)

  const navigateToLogin = <Navigate to={Routes.login} />
  const navigateToHome = <Navigate to={Routes.home} />

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route
          path={Routes.login}
          element={token ? navigateToHome : <LoginPage />}
        />
        <Route
          path={Routes.register}
          element={token ? navigateToHome : <RegisterPage />}
        />
        <Route
          path={Routes.profile}
          element={token ? <ProfilePage /> : navigateToLogin}
        />
        <Route
          path={getRouterPath(Routes.exercise)}
          element={token ? <ExercisePage /> : navigateToLogin}
        />
        <Route
          path={getRouterPath(Routes.exerciseResult)}
          element={token ? <ExerciseResult /> : navigateToLogin}
        />
        <Route
          path={Routes.exercises}
          element={token ? <ExercisesPage /> : navigateToLogin}
        />
        <Route
          path={Routes.home}
          element={token ? <HomePage /> : navigateToLogin}
        />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
