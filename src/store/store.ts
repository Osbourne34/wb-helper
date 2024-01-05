import { configureStore } from '@reduxjs/toolkit'
import { catalogsApi } from './api/catalog'
import { regionsApi } from './api/region'
import { advertsApi } from './api/adverts'
import { AuthSlice } from './slices/auth'
import { FilterSlice } from './slices/filter'

export const store = configureStore({
  reducer: {
    [catalogsApi.reducerPath]: catalogsApi.reducer,
    [regionsApi.reducerPath]: regionsApi.reducer,
    [advertsApi.reducerPath]: advertsApi.reducer,
    auth: AuthSlice.reducer,
    filter: FilterSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      catalogsApi.middleware,
      regionsApi.middleware,
      advertsApi.middleware
    ),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
