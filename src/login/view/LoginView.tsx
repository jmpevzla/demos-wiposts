import React from "react"
import { useFormik } from "formik"

import { useLoginViewModel } from "../controller/loginViewModel";
import { useLoginStoreImpl } from "../data/loginStoreImpl";
import { Login } from "../domain/loginEntity";
import { create } from "../domain/loginModel"
import { useModalStoreImpl } from "@/app/modal/data/modalStoreImpl";
import { useRouterStoreImpl } from "@/app/router/data/routerStoreImpl";
import { useUserStoreImpl } from "@/user/data/userStoreImpl";

const LoginView = () => {
  const modalStore = useModalStoreImpl()
  const userStore = useUserStoreImpl()
  const routerStore = useRouterStoreImpl()
 
  const loginStore = useLoginStoreImpl()
  const {
    isLoading,
    doLogin
  } = useLoginViewModel({
    loginStore,
    modalStore,
    userStore,
    routerStore
  })

  const formFormik = useFormik<Login>({
    initialValues: create(),
    //validate,
    validateOnChange: false,
    enableReinitialize: true,
    onSubmit: async (values) => {

      doLogin(values)

      // login.mutate(values, {
      //   onSuccess: async (data) => {
      //     await showSuccess(data.message)

      //     userDispatch({
      //       type: setUserAction,
      //       payload: data.user,
      //     });

      //     setStUser(data.token, data.user.id);
      //     setLocation("/");
      //   },
      //   onError: (error) => {
      //     if (error.status === 401) {
      //       error.message = "Credentials invalid!, try again";
      //     }
      //   },
      // });
    },
  });

  // const handleChange = (ev: React.ChangeEvent<any>) => {
  //   formFormik.handleChange(ev)
  // }

  //if (show) {
    return (
      // <MainLayout>
      //   <AuthLayout>
          <div className="my-10 md:mx-4">
            {/* <HeaderAuth text="Login" /> */}

            <form className="md:mx-8" onSubmit={formFormik.handleSubmit}>
              <div className="my-3">
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="border-blue-600 w-full p-2 form-control input tracking-wider"
                  placeholder="Email Address"
                  value={formFormik.values.email}
                  onChange={formFormik.handleChange}
                />
                {formFormik.errors.email && (
                  <p className="text-error text-sm font-bold w-50">
                    *{formFormik.errors.email}
                  </p>
                )}
              </div>

              <div className="my-3">
                <input
                  id="password"
                  type="password"
                  name="password"
                  className="border-blue-600 w-full p-2 form-control input tracking-wider"
                  placeholder="Password"
                  value={formFormik.values.password}
                  onChange={formFormik.handleChange}
                />
                {formFormik.errors.password && (
                  <p className="text-error text-sm font-bold w-50">
                    *{formFormik.errors.password}
                  </p>
                )}
              </div>

              <div className="my-3">
                {/* <div className="min-h-8">
                  {login.error && (
                    <p className="text-error text-center">
                      {login.error.message}
                    </p>
                  )}
                </div> */}

                {isLoading && <p>Loading...</p>}
                <button type="submit" className="w-full btn btn-primary">
                  Login
                </button>
              </div>
            </form>

            {/* <div className="text-center">
              <Link href="/register">
                <a className="link !no-underline">Create Account</a>
              </Link>
            </div> */}
          </div>
      //   </AuthLayout>
      // </MainLayout>
    );
  //}
  //return null;

};

export default LoginView;
