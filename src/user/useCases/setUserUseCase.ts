import type { User } from "../domain/userEntity";
import type { UserStore } from "../domain/userStore";

type SetUserStore = Pick<
  UserStore,
  "setUser"
>;

const setUserUseCase = (
  store: SetUserStore,
  user: User
) => {
  store.setUser(user)
};

export { setUserUseCase };
export type { SetUserStore };