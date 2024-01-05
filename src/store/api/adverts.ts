import { createApi } from '@reduxjs/toolkit/query/react'
import { Advert } from '@/types/advert'
import { configBaseQuery } from '../config/config-base-query'

export const advertsApi = createApi({
  reducerPath: 'advertsApi',
  baseQuery: configBaseQuery,
  endpoints: (builder) => ({
    getAdverts: builder.query<
      Advert,
      { input: string; type: number; region_id: string; page: number }
    >({
      query: (params) => {
        return {
          url: `/wb/adverts/`,
          params,
        }
      },
    }),
  }),
})

export const { useGetAdvertsQuery } = advertsApi
