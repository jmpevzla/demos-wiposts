import { Provider } from "react-redux";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { appStoreImpl } from "../data/appStoreImpl";
import HomeView from "@/app/home/view/HomeView";
import LoginView from "@/app/login/view/LoginView";

export default AppView;

function AppView() {
  return (
    <Provider store={appStoreImpl}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<HomeView />} />
            <Route path="login" element={<LoginView />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

