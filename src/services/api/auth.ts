import instance from '.'

interface FetchLoginParameters {
  email: string
  password: string
}

interface FetchRegisterParameters extends FetchLoginParameters {
  name: string
}

export const fetchLogin = (params: FetchLoginParameters) =>
  instance.post('/login', params)

export const fetchRegister = (params: FetchRegisterParameters) =>
  instance.post('/register', params)

export const fetchLogout = () => instance.delete('/logout')
