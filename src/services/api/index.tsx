import axios, { AxiosResponse } from 'axios'

import { Routes } from 'constants/routes'
import { getState } from 'services/store'
import { CaseType, transformProps } from 'services/transformProps'

export const instance = axios.create({
  baseURL: `${Routes.API}/api`,
  // timeout: 4000,
  transformRequest: [
    (data) => transformProps(data, CaseType.SNAKE_CASE),
    ...((Array.isArray(axios.defaults.transformRequest) ||
    !axios.defaults.transformRequest
      ? axios.defaults.transformRequest
      : [axios.defaults.transformRequest]) || []),
  ],
  transformResponse: [
    ...((Array.isArray(axios.defaults.transformResponse) ||
    !axios.defaults.transformResponse
      ? axios.defaults.transformResponse
      : [axios.defaults.transformResponse]) || []),
    (data) => transformProps(data, CaseType.CAMEL_CASE),
  ],
})

export const getAuthHeaders = () => ({
  Authorization: `Bearer ${getState?.()?.auth.token}`,
})

export const getData = async (response: Promise<AxiosResponse>) => {
  return (await response).data
}

export default instance
