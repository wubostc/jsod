import axios from 'axios'
import store, { AuthState } from '@/store'


const baseURL = process.env.VUE_APP_HOST

const api = axios.create({
  baseURL,
})

api.interceptors.request.use(req => {
  if (req.headers && store.state.authState === AuthState.OK) {
    req.headers.USER_LOGIN_TOKEN = store.state.authorization
    req.headers.Authorization = store.state.authorization
  }

  return req
}, err => {
  return Promise.reject(err);
})

api.interceptors.response.use(resp => {
  if (resp.data?.errcode === -1) {
    store.dispatch('setToken')
  }
  return resp
}, (err) => {
  return Promise.reject(err);
})

export default api

