import type { User } from "./userEntity";

function setLogin(user: Record<string, any>): User {
  return {
    email: user.email,
  }
}

export { setLogin, };