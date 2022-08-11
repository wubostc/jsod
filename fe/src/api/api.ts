import axios from 'axios'


const baseURL = process.env.VUE_APP_HOST

const api = axios.create({
  baseURL,
})

api.interceptors.response.use(resp => {
  return resp
}, (err) => {
  return Promise.reject(err);
})

export default api

