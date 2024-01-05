import styled from 'styled-components'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Stack } from './ui/stack'
import { ChangeEvent, SyntheticEvent, useState } from 'react'
import { login } from '@/store/slices/auth'
import { useAppDispatch, useAppSelector } from '@/store/hooks'

import { Title } from './ui/title'

const StyledForm = styled.form`
  max-width: 400px;
  margin: 100px auto;
`

export const LoginForm = () => {
  const dispatch = useAppDispatch()
  const error = useAppSelector((state) => state.auth.error)

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name
    const value = event.target.value

    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      }
    })
  }

  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()

    dispatch(login(formData))
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Stack>
        <Title center={true}>Войти</Title>

        {error && (
          <p>
            {
              //@ts-ignore
              error?.detail
            }
          </p>
        )}

        <Input
          required
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <Input
          required
          name="password"
          value={formData.password}
          onChange={handleChange}
          type="password"
          placeholder="Password"
        />

        <Button type="submit">Войти</Button>
      </Stack>
    </StyledForm>
  )
}
