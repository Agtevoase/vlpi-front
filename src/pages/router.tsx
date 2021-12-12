import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom'

import { Routes, getRouterPath } from 'constants/routes'

import LoginPage from './login'
import RegisterPage from './register'
import HomePage from '.'
import ProfilePage from './profile'
import ExercisePage from './exercises/id'
import ExercisesPage from './exercises'

const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path={Routes.login} element={<LoginPage />} />
      <Route path={Routes.register} element={<RegisterPage />} />
      <Route path={Routes.profile} element={<ProfilePage />} />
      <Route path={getRouterPath(Routes.exercise)} element={<ExercisePage />} />
      <Route path={Routes.exercises} element={<ExercisesPage />} />
      <Route path={Routes.home} element={<HomePage />} />
    </Switch>
  </BrowserRouter>
)

export default Router
