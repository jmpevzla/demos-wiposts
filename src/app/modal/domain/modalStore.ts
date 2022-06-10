import type { Modal } from "./modalEntity"

interface ModalStore {
  show(modal: Modal): void
}

export type { ModalStore }