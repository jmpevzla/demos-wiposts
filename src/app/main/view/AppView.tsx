import { Provider } from "react-redux";
import CounterView from "../../counter/view/CounterView";

import { appStoreImpl } from "../data/appStoreImpl";

function AppView() {
  return (
    <Provider store={appStoreImpl}>
      <CounterView />
    </Provider>
  );
}

export default AppView;
