import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "@/counter/data/counterSlice"
import loginReducer from "@/app/login/data/loginSlice"
import userReducer from "@/app/user/data/userSlice"

const appStoreImpl = configureStore({
  reducer: {
    counter: counterReducer,
    login: loginReducer,
    user: userReducer
  }
})

type AppRootState = ReturnType<typeof appStoreImpl.getState>;
type AppDispatch = typeof appStoreImpl.dispatch

export { appStoreImpl };
export type { AppRootState, AppDispatch };
