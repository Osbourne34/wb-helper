import { BASE_URL } from '@/constans/api'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Router from 'next/router'
import Cookies from 'js-cookie'

interface LoginBody {
  email: string
  password: string
}

interface LoginResponse {
  access: string
}

export const login = createAsyncThunk(
  'auth/login',
  async (body: LoginBody, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/users/login/`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        throw await response.json()
      }

      const data: LoginResponse = await response.json()

      Cookies.set('token', data.access, {
        expires: 1, // 1 day
        path: '/',
      })

      Router.replace('/')

      return data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

interface AuthState {
  isAuth: boolean
  token: string | null
  error: string | null
}

const initialState = {
  isAuth: false,
  token: null,
} as AuthState

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.isAuth = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.isAuth = true
      state.token = action.payload?.access!
    })
    builder.addCase(login.pending, (state, action) => {
      state.error = null
    })
    builder.addCase(login.rejected, (state, action) => {
      state.error = action.payload as string
    })
  },
})

export const { setAuth } = AuthSlice.actions
