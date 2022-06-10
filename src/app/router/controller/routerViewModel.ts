// import React from "react"
// import { RouterEntity } from "../domain/routerEntity";

// import type { RouterStore } from "../domain/routerStore"

// import { goToUseCase } from "../useCases/goToUseCase"

// function useRouterViewModel(store: RouterStore) {
//   const goTo = React.useCallback(
//     function (routerEntity: RouterEntity) {
//       goToUseCase({
//         goTo: store.goTo
//       }, routerEntity);
//     },
//     [store.goTo]
//   );

//   return {
//     goTo
//   };
// }

// export { useRouterViewModel };