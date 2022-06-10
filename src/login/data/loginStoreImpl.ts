import React from "react";
import { useAppSelector, useAppDispatch } from "@/main/data/hooks";

import type { LoginStore } from "../domain/loginStore";
import type { Login } from "../domain/loginEntity";

import type { LoginStoreState } from "./loginSlice"
import { actions, loginSelector } from "./loginSlice"
import { doLoginApi } from "./loginService";

const useLoginStoreImpl = (): LoginStore => {
  const { isLoading } = useAppSelector<
    LoginStoreState
  >(loginSelector);
  const dispatch = useAppDispatch();

  const doLogin = React.useCallback(
    async (login: Login) => {
      dispatch(actions.doLogin())
      const response = await doLoginApi(login)
      dispatch(actions.doLoginFinish())
      return response.info
    },
    [dispatch]
  )

  return {
    isLoading,
    
    doLogin
  };
};

export { useLoginStoreImpl };