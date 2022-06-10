import { User } from "@/app/user/domain/userEntity"

export interface AuthData {
  token: string,
  user: User
}