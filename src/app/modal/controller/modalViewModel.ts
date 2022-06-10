// import React from "react";

// import type { ModalStore } from "../domain/modalStore";
// import { Modal } from "../domain/modalEntity";

// import { showModalUseCase } from "../useCases/showModalUseCase";

// function useModalViewModel(store: ModalStore) {
//   const showModal = React.useCallback(
//     function (modal: Modal) {
//       showModalUseCase({
//         show: store.show
//       }, modal);
//     },
//     [store.show]
//   );

//   return {
//     showModal
//   };
// }

// export { useModalViewModel };