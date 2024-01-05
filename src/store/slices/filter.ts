import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface FilterState {
  input: string
  region_id: string
}

const initialState = {
  input: '',
  region_id: '',
} as FilterState

export const FilterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      return {
        ...state,
        ...action.payload,
      }
    },
  },
})

export const { setFilter } = FilterSlice.actions
