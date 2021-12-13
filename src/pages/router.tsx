import { useSelector } from 'react-redux'
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes as Switch,
} from 'react-router-dom'

import { ReduxState } from 'store/types'
import { Routes, getRouterPath } from 'constants/routes'

import LoginPage from './login'
import RegisterPage from './register'
import HomePage from '.'
import ProfilePage from './profile'
import ExercisePage from './exercises/id'
import ExercisesPage from './exercises'

const Router: React.FC = () => {
  const { token } = useSelector((state: ReduxState) => state.auth)

  const navigateElement = <Navigate to={Routes.login} />

  return (
    <BrowserRouter>
      <Switch>
        <Route path={Routes.login} element={<LoginPage />} />
        <Route path={Routes.register} element={<RegisterPage />} />
        <Route
          path={Routes.profile}
          element={token ? <ProfilePage /> : navigateElement}
        />
        <Route
          path={getRouterPath(Routes.exercise)}
          element={token ? <ExercisePage /> : navigateElement}
        />
        <Route
          path={Routes.exercises}
          element={token ? <ExercisesPage /> : navigateElement}
        />
        <Route
          path={Routes.home}
          element={token ? <HomePage /> : navigateElement}
        />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
