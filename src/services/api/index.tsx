import axios from 'axios'

import Routes from 'constants/routes'


const instance = axios.create({
  baseURL: `${Routes.API}/api`,
  timeout: 2000,
  headers: {
    Authorization: '' // Add bearer token from redux later
  }
})

export default instance
