import type { Login } from "./loginEntity";

function create(): Login {
  return {
    email: '',
    password: ''
  }
}

export { create, };