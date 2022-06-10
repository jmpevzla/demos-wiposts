import React from "react";

import type { LoginStore } from "../domain/loginStore";
import { Login } from "../domain/loginEntity";

import { doLoginUseCase } from "../useCases/doLoginUseCase";

import { ModalStore } from "@/shared/app/modal/domain/modalStore";
import { RouterStore } from "@/shared/app/router/domain/routerStore";
import { UserStore } from "@/app/user/domain/userStore";

interface useLoginViewModelParams {
  loginStore: LoginStore,
  modalStore: ModalStore,
  userStore: UserStore,
  routerStore: RouterStore
}

function useLoginViewModel(
  params: useLoginViewModelParams
  ) {

  const { loginStore } = params

  const doLogin = React.useCallback(
    function (login: Login) {

      doLoginUseCase({
        doLogin: loginStore.doLogin
      }, login
      , params);

    },
    [loginStore.doLogin]
  );

  return {
    isLoading: loginStore.isLoading,
 
    doLogin
  };
}

export { useLoginViewModel };