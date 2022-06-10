import { Modal } from "../domain/modalEntity";
import type { ModalStore } from "../domain/modalStore";

type ShowModalStore = Pick<ModalStore, "show">

const showModalUseCase = (
  store: ShowModalStore, 
  modal: Modal
  ) => {

  store.show(modal)
}

export { showModalUseCase };
export type { ShowModalStore };
