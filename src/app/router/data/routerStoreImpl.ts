import React from "react";
import { useAppSelector, useAppDispatch } from "@/main/data/hooks";

import type { RouterStore } from "../domain/routerStore";

import type { RouterStoreState } from "./routerSlice"
import { RouterEntity } from "../domain/routerEntity";
// import { actions, loginSelector } from "./storageUserSlice"

const useRouterStoreImpl = (): RouterStore => {
  // const { isLoading } = useAppSelector<
  //   ModalStoreState
  // >(modalSelector);
  const dispatch = useAppDispatch();

  const goTo = React.useCallback(
    (routerEntity: RouterEntity) => {
      console.log('yendo a ', routerEntity)
    },
    [dispatch]
  )

  return {
    goTo
  };
};

export { useRouterStoreImpl };