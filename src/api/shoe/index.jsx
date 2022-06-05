import axios from 'axios'

// Public
export const getShoes = (params) =>
  axios.get(`/shoe`, {
    params,
  })

// Require auth
export const updateShoe = (params, data) =>
  axios.put(`/shoe`, data, {
    params,
  })

export const storeShoe = (data) => axios.post(`/shoe`, data)

export const destroyShoes = (data) =>
  axios.delete(`/shoe`, {
    params: data,
  })
