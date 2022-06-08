import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "@/counter/data/counterSlice"; 

const appStoreImpl = configureStore({
  reducer: {
    counter: counterReducer
  }
})

type AppRootState = ReturnType<typeof appStoreImpl.getState>;
type AppDispatch = typeof appStoreImpl.dispatch

export { appStoreImpl };
export type { AppRootState, AppDispatch };
