import type { Login } from "./loginEntity";

function create(): Login {
  return {
    email: '',
    password: ''
  }
}

// function setLogin(login: Login) {
//   return {
//     email: login.email,
//     password: login.password
//   }
// }

export { create, }; //setLogin };