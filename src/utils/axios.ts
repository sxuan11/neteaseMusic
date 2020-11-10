import axios from 'axios'

const config: object = {
  baseURL: process.env.VUE_APP_API || "",
  timeout: 20 * 1000,
  withCredentials: true,
}

const _axios = axios.create(config)

_axios.interceptors.response.use(res => {
  if (res.data.code != 200) {
    return Promise.reject(res.data)
  }

  return res.data
})

export default _axios

