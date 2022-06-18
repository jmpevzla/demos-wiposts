import { Provider } from "react-redux";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query'

import { appStoreImpl } from "../data/appStoreImpl";
import HomeView from "@/app/home/view/HomeView";
import LoginView from "@/app/login/view/LoginView";

const queryClient = new QueryClient()

export default AppView;

function AppView() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

