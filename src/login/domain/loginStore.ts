import { AuthData } from "@/app/auth/domain/authEntity";
import type { Login } from "./loginEntity";

interface LoginStore {
  isLoading: boolean;

  doLogin(login: Login): Promise<AuthData | null>;
}

export type { LoginStore };