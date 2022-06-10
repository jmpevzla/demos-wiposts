import { Provider } from "react-redux";
import CounterView from "@/counter/view/CounterView";

import { appStoreImpl } from "../data/appStoreImpl";
import LoginView from "@/login/view/LoginView";

function AppView() {
  return (
    <Provider store={appStoreImpl}>
      {/* <CounterView /> */}
      <LoginView />
    </Provider>
  );
}

export default AppView;
