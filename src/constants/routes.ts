export enum Routes {
  API = 'http://194.213.104.146',
  login = '/login',
  register = '/register',
  home = '/',
  exercises = '/exercises',
  exercise = '/exercises/[id]',
  profile = '/profile',
  exerciseResult = '/exercisesResult'
}

export const getRouterPath = (route: string) =>
  route.replace(/\[(.+)\]/, (_, gr) => `:${gr}`)
