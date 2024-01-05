import { BASE_URL } from '@/constans/api'
import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import Cookies from 'js-cookie'

export const configBaseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers) => {
    const token = Cookies.get('token')
    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }
    return headers
  },
})
