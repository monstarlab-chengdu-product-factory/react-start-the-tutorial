import axios from 'axios'

import store from '../store'
import {shownGlobalError} from '../actions'

import {API_HOST} from '../constants/config'

let instance = axios.create({
  baseURL: API_HOST,
  timeout: 10000,
  headers: {
    'Authorization': `Token ${token}`
  }
})

instance.interceptors.response.use(
  response => {
    return response
  },
  error => {
    handleError(error.response)
    return Promise.reject(error)
  }
)

const checkStatus = response => {
  if (response && (response.status === 200 || response.status === 201)) {
    return response.data
  }
}

const handleError = response => {
  if (response && response.status === 403) {
    store.dispatch(shownGlobalError('NO_AUTH'))
  }
}

export default {
  instance,
  post (url, data) {
    return instance({
      method: 'post',
      url,
      data: data
    }).then((response) => {
      return checkStatus(response)
    })
  },
  put (url, data) {
    return instance({
      method: 'put',
      url,
      data: data
    }).then((response) => {
      return checkStatus(response)
    })
  },
  get (url, params) {
    return instance({
      method: 'get',
      url,
      params,
      withCredentials: true
    }).then((response) => {
      return checkStatus(response)
    })
  },
  delete (url, params) {
    return instance({
      method: 'delete',
      url,
      params
    }).then((response) => {
      return checkStatus(response)
    })
  }
}
