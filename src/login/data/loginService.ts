import type { Login } from "../domain/loginEntity";

function doLoginApi(login: Login): Promise<Object> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        email: 'demo@wipost.io'
      })
    }, 1000);
  });
}

export { doLoginApi };