import { instance, getData, getAuthHeaders } from '.'

interface FetchLoginParameters {
  email: string
  password: string
}

interface FetchRegisterParameters extends FetchLoginParameters {
  name: string
}

export const fetchLogin = (params: FetchLoginParameters) =>
  getData(instance.post('/login', params))

export const fetchRegister = (params: FetchRegisterParameters) =>
  getData(instance.post('/register', params))

export const fetchLogout = () =>
  instance.delete('/logout', { headers: getAuthHeaders() })

export const fetchProfile = () =>
  getData(instance.get('/profile?append=statistics', { headers: getAuthHeaders() }))
