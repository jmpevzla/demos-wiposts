import { createSlice } from "@reduxjs/toolkit";

import type { ModalStore } from "../domain/modalStore";

import type { AppRootState } from "@/main/data/appStoreImpl";

export type ModalStoreState = Omit<ModalStore, "show">

const INITIAL_STATE: ModalStoreState = {
};
  
export const modalSlice = createSlice({
  name: 'modal',
  initialState: INITIAL_STATE,
  reducers: {
  }
})

export const actions = modalSlice.actions

//export const modalSelector = (state: AppRootState) => state.modal;

export default modalSlice.reducer