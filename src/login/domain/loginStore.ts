import type { Login } from "./loginEntity";

interface LoginStore {
  // State
  // login: Login | undefined;
  isLoading: boolean;

  // Actions
  //initialLogin(): Login;
  //setLogin(login: Login): void;
  doLogin(login: Login): Promise<Object | undefined>;
}

export type { LoginStore };