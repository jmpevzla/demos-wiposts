import React from "react";
import { useAppSelector, useAppDispatch } from "@/main/data/hooks";

import type { CounterStore } from "../domain/counterStore";
import type { Counter } from "../domain/counterEntity";

import type { CounterStoreState } from "./counterSlice"
import { actions, counterSelector } from "./counterSlice"
import { getCounter, updateCounter as upCounter } from "./counterService";

const useCounterStoreImpl = (): CounterStore => {
  const { counter, isLoading, isUpdating } = useAppSelector<
    CounterStoreState
  >(counterSelector);
  const dispatch = useAppDispatch();

  const setCounter = React.useCallback(
    (counter: Counter) => dispatch(actions.setCounter(counter)), 
    [dispatch]
  );

  const loadInitialCounter = React.useCallback(
    async () => {
      dispatch(actions.getCounter())
      const counter = await getCounter()
      dispatch(actions.getCounterSuccess(counter))
      return counter;
    },
    [dispatch]
  );

  const updateCounter = React.useCallback(
    async (counter: Counter) => {
      dispatch(actions.updateCounter())
      const cter = await upCounter(counter)
      dispatch(actions.updateCounterSuccess())
      return cter
    },
    [dispatch]
  );

  return {
    counter,
    isLoading,
    isUpdating,
    setCounter,
    loadInitialCounter,
    updateCounter
  };
};

export { useCounterStoreImpl };