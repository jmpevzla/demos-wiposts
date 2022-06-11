import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import responseErrorInterceptor from './interceptors/respError'
import responseOkInterceptor from './interceptors/respOk'

Axios.defaults.baseURL = 'http://localhost:4000'

function addRequest(axiosInstance: AxiosInstance, 
  onFulfilled?: (config: AxiosRequestConfig) => AxiosRequestConfig, 
  onRejected?: (error: any) => any) {

  axiosInstance.interceptors.request.use(onFulfilled, onRejected)  
}

function addResponse(axiosInstance: AxiosInstance, 
  onFulfilled?: (response: AxiosResponse) => AxiosResponse, 
  onRejected?: (error: any) => any) {

  axiosInstance.interceptors.response.use(onFulfilled, onRejected)  
}

export const axiosAuth = Axios.create()
addResponse(axiosAuth, responseOkInterceptor, responseErrorInterceptor)