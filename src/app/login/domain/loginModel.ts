import type { Login } from "./loginEntity";

function create(): Login {
  return {
    email: '',
    password: ''
  }
}

function validate(login: Login) {
  const errors: Record<string, string> = {};
  if (!login.email) {
    errors.email = "Required";
  }
  if (!login.password) {
    errors.password = "Required";
  }
  return errors;
}

export { create, validate, };