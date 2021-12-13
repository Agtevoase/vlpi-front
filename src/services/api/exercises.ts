import instance, { getAuthHeaders } from '.'

export const fetchExercises = () =>
  instance.get('/exercises', { headers: getAuthHeaders() })

export default { fetchExercises }
