import React from "react";
import { useAppSelector, useAppDispatch } from "@/main/data/hooks";

import type { UserStore } from "../domain/userStore";
import type { User, StorageUser } from "../domain/userEntity";

import type { UserStoreState } from "./userSlice"
import { actions, userSelector } from "./userSlice"
import { setStUser } from "./localStorage"
 
const useUserStoreImpl = (): UserStore => {
  const { user } = useAppSelector<
    UserStoreState
  >(userSelector);
  const dispatch = useAppDispatch();

  const setUser = React.useCallback(
    (user: User) => dispatch(actions.setUser(user)), 
    [dispatch]
  );

  const setStorageUser = React.useCallback(
    (storageUser: StorageUser) => {
      setStUser(storageUser.token, storageUser.id)
    },
    []
  ); 

  return {
    user,
    setUser,
    setStorageUser
  };
};

export { useUserStoreImpl };