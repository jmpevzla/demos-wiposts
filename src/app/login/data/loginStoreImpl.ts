import React from "react";
import { useQuery, useQueryClient } from 'react-query'
import { useAppSelector, useAppDispatch } from "@/main/data/hooks";

import type { LoginStore } from "../domain/loginStore";
import type { Login } from "../domain/loginEntity";

import type { LoginStoreState } from "./loginSlice"
import { actions, loginSelector } from "./loginSlice"
//import { doLoginApi } from "./loginService";
import { useLogin } from './loginQuery'
import { AuthData } from "@/extras/authEntity";

const useLoginStoreImpl = (): LoginStore => {
  const { isLoading, error } = useAppSelector<
    LoginStoreState
  >(loginSelector);
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient()
  const login = useLogin(queryClient)

  const doLogin = React.useCallback(
    async (xlogin: Login) => {
      dispatch(actions.setError(''))
      dispatch(actions.doLogin())

      return login.mutateAsync(xlogin, {
        onSettled() {
          dispatch(actions.doLoginFinish())
        }
      })

      // try {
      //   dispatch(actions.setError(''))
      //   dispatch(actions.doLogin())
      //   //const response = await doLoginApi(login) 
      //   //return response.info
      // } catch(error) {
      //   throw error
      // } finally {
      //   dispatch(actions.doLoginFinish())
      // }

    },
    [dispatch]
  )

  const setError = React.useCallback(
    (error: string) => {
      dispatch(actions.setError(error))
    }
    , 
    [dispatch]
  )

  return {
    isLoading,
    error,

    doLogin,
    setError
  };
};

export { useLoginStoreImpl };