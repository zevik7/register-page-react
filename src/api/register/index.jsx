import axios from 'axios'

export const register = (data) => axios.post(`/auth/login`, data)
