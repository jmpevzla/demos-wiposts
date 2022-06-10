import type { User, StorageUser } from "./userEntity";

interface UserStore {
  user: User | undefined,
  
  setUser(user: User): void
  setStorageUser(storageUser: StorageUser): void
}

export type { UserStore };
