import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { LoginStore } from "../domain/loginStore";
import type { AppRootState } from "@/main/data/appStoreImpl";

export type LoginStoreState = Omit<LoginStore, "doLogin">

const INITIAL_STATE: LoginStoreState = {
  isLoading: false
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
    }
  }
})

export const actions = loginSlice.actions

export const loginSelector = (state: AppRootState) => state.login;

export default loginSlice.reducer