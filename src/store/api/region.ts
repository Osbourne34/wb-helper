import { createApi } from '@reduxjs/toolkit/query/react'
import { Region } from '@/types/region'
import { configBaseQuery } from '../config/config-base-query'

export const regionsApi = createApi({
  reducerPath: 'regionsApi',
  baseQuery: configBaseQuery,
  endpoints: (builder) => ({
    getRegions: builder.query<Region[], void>({
      query: () => `/wb/regions/`,
    }),
  }),
})

export const { useGetRegionsQuery } = regionsApi
