import { useMutation } from 'react-query'
import type { QueryClient } from 'react-query'
import type { AuthData } from '@/extras/authEntity'
import type { TError } from '@/extras/errorEntity'
import type { Login } from '../domain/loginEntity'
import { doLoginApi } from './loginService'

export function useLogin(queryClient: QueryClient) {
  return useMutation<AuthData, TError, Login>
    (async (login) => {
      const { info } = await doLoginApi(login) 
      return info!
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries()
    }
  })
}