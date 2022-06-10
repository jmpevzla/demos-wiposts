import { createSlice } from "@reduxjs/toolkit";

import type { RouterStore } from "../domain/routerStore";

import type { AppRootState } from "@/main/data/appStoreImpl";

export type RouterStoreState = Omit<RouterStore, "goTo">

const INITIAL_STATE: RouterStoreState = {
};
  
export const routerSlice = createSlice({
  name: 'router',
  initialState: INITIAL_STATE,
  reducers: {
  }
})

export const actions = routerSlice.actions

//export const storageUserSelector = (state: AppRootState) => state.storageUser;

export default routerSlice.reducer