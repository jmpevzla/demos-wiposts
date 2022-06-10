import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { UserStore } from "../domain/userStore";
import type { AppRootState } from "@/main/data/appStoreImpl";
import { User } from '../domain/userEntity';

export type UserStoreState = Omit<UserStore, "setUser">

const INITIAL_STATE: UserStoreState = {
  user: undefined
};
  
export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
    },
  }
})

export const actions = userSlice.actions

export const userSelector = (state: AppRootState) => state.user;

export default userSlice.reducer