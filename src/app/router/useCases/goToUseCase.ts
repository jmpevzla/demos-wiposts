import { RouterEntity } from "../domain/routerEntity"
import type { RouterStore } from "../domain/routerStore"

type GoToStore = Pick<RouterStore, "goTo">

const goToUseCase = (
  store: GoToStore,
  routerEntity: RouterEntity
  ) => {

  store.goTo(routerEntity)
}

export { goToUseCase }
export type { GoToStore }
