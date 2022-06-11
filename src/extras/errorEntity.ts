import { AxiosError } from "axios";

export interface TError extends AxiosError {
  statusNum: number
}