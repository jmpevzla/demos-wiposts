import React from "react";
import { useAppSelector, useAppDispatch } from "@/main/data/hooks";
import { NavigateOptions, useNavigate } from "react-router-dom";

import type { RouterStore } from "../domain/routerStore";

import type { RouterStoreState } from "./routerSlice"
import { RouterEntity } from "../domain/routerEntity";
// import { actions, loginSelector } from "./storageUserSlice"

const useRouterStoreImpl = (): RouterStore => {
  // const { isLoading } = useAppSelector<
  //   ModalStoreState
  // >(modalSelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const goTo = React.useCallback(
    (routerEntity: RouterEntity) => {
      let opts: NavigateOptions  = {}
      switch(routerEntity.type) {
        case 'push':
          opts.replace = false
          break
        case 'replace':
          opts.replace = true
          break
      }

      switch(routerEntity.name) {
        case 'home': 
          navigate('/', opts)
          break
      }
    },
    [dispatch]
  )

  return {
    goTo
  };
};

export { useRouterStoreImpl };