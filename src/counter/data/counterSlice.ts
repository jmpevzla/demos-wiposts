import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { CounterStore } from "../domain/counterStore";
import type { Counter } from "../domain/counterEntity";
import type { AppRootState } from "@/main/data/appStoreImpl";

export type CounterStoreState = Omit<CounterStore, "loadInitialCounter" | "setCounter" | "updateCounter">;

const INITIAL_STATE: CounterStoreState = {
  counter: undefined,
  isLoading: false,
  isUpdating: false
};
  
export const counterSlice = createSlice({
  name: 'counter',
  initialState: INITIAL_STATE,
  reducers: {
    setCounter: (state, action: PayloadAction<Counter>) => {
      state.counter = action.payload
    },
    getCounter: (state) => {
      state.isLoading = true
    },
    getCounterSuccess: (state, action: PayloadAction<Counter>) => {
      state.isLoading = false
      state.counter = action.payload
    },
    updateCounter: (state) => {
      state.isUpdating = true
    },
    updateCounterSuccess: (state) => {
      state.isUpdating = false
    }
  }
})

export const actions = counterSlice.actions

export const counterSelector = (state: AppRootState) => state.counter;

export default counterSlice.reducer