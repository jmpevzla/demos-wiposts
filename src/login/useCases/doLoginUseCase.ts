import type { Login } from "../domain/loginEntity";
import type { LoginStore } from "../domain/loginStore";

import { Modal } from "@/app/modal/domain/modalEntity";
import { ModalStore } from "@/app/modal/domain/modalStore";

import { RouterStore } from "@/app/router/domain/routerStore";
import { RouterEntity } from "@/app/router/domain/routerEntity";
import { UserStore } from "@/user/domain/userStore";

type DoLoginStore = Pick<
  LoginStore,
  "doLogin"
>;

const doLoginUseCase = async (
  store: DoLoginStore,
  login: Login,
  extras: {
    modalStore: ModalStore,
    userStore: UserStore,
    routerStore: RouterStore
  }
) => {
  const {
    modalStore,
    userStore,
    routerStore
  } = extras
  
  const user = await store.doLogin(login)
  const modal: Modal = {
    type: "success",
    message: 'Login Successful!'
  }
  modalStore.show(modal)
  
  userStore.setUser({
    email: 'demo@wipost.io'
  })

  userStore.setStorageUser({
    token: 'alphabet',
    id: 1
  })

  const route: RouterEntity = {
    type: 'replace',
    name: 'home'
  }
  routerStore.goTo(route)

  return user
};

export { doLoginUseCase };
export type { DoLoginStore };