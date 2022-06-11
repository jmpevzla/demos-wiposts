import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { LoginStore } from "../domain/loginStore";
import type { AppRootState } from "@/main/data/appStoreImpl";

export type LoginStoreState = Omit<LoginStore, "doLogin" | "setError">

const INITIAL_STATE: LoginStoreState = {
  isLoading: false,
  error: ''
};
  
export const loginSlice = createSlice({
  name: 'login',
  initialState: INITIAL_STATE,
  reducers: {
    doLogin: (state) => {
      state.isLoading = true
    },
    doLoginFinish: (state) => {
      state.isLoading = false
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    }
  }
})

export const actions = loginSlice.actions

export const loginSelector = (state: AppRootState) => state.login;

export default loginSlice.reducer