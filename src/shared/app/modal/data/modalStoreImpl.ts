import React from "react";
import { useAppSelector, useAppDispatch } from "@/main/data/hooks";

import type { ModalStore } from "../domain/modalStore";
import type { Modal } from "../domain/modalEntity";

import type { ModalStoreState } from "./modalSlice"
// import { actions, loginSelector } from "./modalSlice"
import { showSuccess, showError } from "./modals"

const useModalStoreImpl = (): ModalStore => {
  // const { isLoading } = useAppSelector<
  //   ModalStoreState
  // >(modalSelector);
  const dispatch = useAppDispatch();

  const show = React.useCallback(
    async (modal: Modal) => {
      switch(modal.type) {
        case 'success':
          await showSuccess(modal.message)
          break
        case 'error':
          await showError(modal.message)
          break
      }
    },
    [dispatch]
  )

  return {
    show
  };
};

export { useModalStoreImpl };