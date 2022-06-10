import { AuthData } from "@/app/auth/domain/authEntity"

export interface TResponse<T = any> {
  info: T | null
}

export type TAuthResponse = TResponse<AuthData>