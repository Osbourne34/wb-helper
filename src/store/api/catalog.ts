import { createApi } from '@reduxjs/toolkit/query/react'
import { Catalog } from '@/types/catalog'
import { configBaseQuery } from '../config/config-base-query'

export const catalogsApi = createApi({
  reducerPath: 'catalogsApi',
  baseQuery: configBaseQuery,
  tagTypes: ['catalog'],
  endpoints: (builder) => ({
    getCatalogs: builder.query<Catalog[], void>({
      query: () => `/wb/catalogs/`,
    }),
  }),
})

export const { useGetCatalogsQuery } = catalogsApi
