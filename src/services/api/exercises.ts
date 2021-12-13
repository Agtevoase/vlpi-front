import instance, { getAuthHeaders, getData } from '.'

export const fetchExercises = () =>
  getData(instance.get('/exercises', { headers: getAuthHeaders() }))

export default { fetchExercises }
