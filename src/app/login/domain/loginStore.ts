import { AuthData } from "@/extras/authEntity";
import type { Login } from "./loginEntity";

interface LoginStore {
  isLoading: boolean;
  error: string;

  doLogin(login: Login): Promise<AuthData | null>
  setError(error: string): void
}

export type { LoginStore };