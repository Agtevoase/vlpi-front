import { SubmitExercise } from 'types/models'
import instance, { getAuthHeaders, getData } from '.'

export const fetchExercises = () =>
  getData(instance.get('/exercises?append=statistics,best_graded', { headers: getAuthHeaders() }))

export const fetchExercise = (id:string) =>
  getData(instance.get(`/exercises/${id}?include=choices,columns,user`, { headers: getAuthHeaders() }))

export const postExercise = (d: SubmitExercise) =>
  getData(instance.post(`/exercise-passings`, d, { headers: getAuthHeaders()}))


export default { fetchExercises }
