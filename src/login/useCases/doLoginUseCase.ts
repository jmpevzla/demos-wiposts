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
  
  const authData = await store.doLogin(login)

  const modal: Modal = {
    type: "success",
    message: 'Login Successful!'
  }
  modalStore.show(modal)
  
  userStore.setUser(authData!.user)

  userStore.setStorageUser({
    token: authData!.token,
    id: authData!.user.id
  })

  const route: RouterEntity = {
    type: 'replace',
    name: 'home'
  }
  routerStore.goTo(route)
};

export { doLoginUseCase };
export type { DoLoginStore };