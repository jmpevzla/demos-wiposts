import { RouterEntity } from "./routerEntity"

interface RouterStore {
  goTo(routerEntity: RouterEntity): void
}

export type { RouterStore }