import { User } from "@/user/domain/userEntity"

export interface AuthData {
  token: string,
  user: User
}
