import React from "react";
import { useAppSelector, useAppDispatch } from "@/main/data/hooks";

import type { LoginStore } from "../domain/loginStore";
import type { Login } from "../domain/loginEntity";
//import { create } from "../domain/loginModel"

import type { LoginStoreState } from "./loginSlice"
import { actions, loginSelector } from "./loginSlice"
import { doLoginApi } from "./loginService";

const useLoginStoreImpl = (): LoginStore => {
  const { isLoading } = useAppSelector<
    LoginStoreState
  >(loginSelector);
  const dispatch = useAppDispatch();

  // const initialLogin = React.useCallback(
  //   () =>  {
  //     const xlogin = create()
  //     dispatch(actions.setLogin(xlogin))
  //     return xlogin
  //   },
  //   [dispatch]
  // );

  // const setLogin = React.useCallback(
  //   (xlogin: Login) => {
  //     dispatch(actions.setLogin(xlogin))
  //   },
  //   [dispatch]
  // )

  const doLogin = React.useCallback(
    async (login: Login) => {
      dispatch(actions.doLogin())
      const response = await doLoginApi(login)
      dispatch(actions.doLoginFinish())
      return response
    },
    [dispatch]
  )

  return {
    //login,
    isLoading,
    
    // initialLogin,
    // setLogin,
    doLogin
  };
};

export { useLoginStoreImpl };