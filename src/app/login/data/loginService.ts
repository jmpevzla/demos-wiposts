import type { AxiosResponse } from "axios";
import type { Login } from "../domain/loginEntity";

import type { TAuthResponse } from "@/extras/api/apiTypes";
import { axiosAuth } from '@/extras/api/getAxios'

export async function doLoginApi(credentials: Login): Promise<TAuthResponse> {
  const res = await axiosAuth.post<any, AxiosResponse<TAuthResponse>, Login>
    (`/login`, credentials)

  return res.data
}
