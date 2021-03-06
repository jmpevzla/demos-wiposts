import { AuthData } from "@/extras/authEntity"

export interface TResponse<T = any> {
  info: T | null
}

export type TAuthResponse = TResponse<AuthData>