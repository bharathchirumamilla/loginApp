import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001/api',
})


export const loginService = payload => api.post(`/login`, payload)

const apis = {
    loginService,
}

export default apis
