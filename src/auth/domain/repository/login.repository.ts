import type { ILogin } from "../models";

export interface ILoginRepository {
  login: (data: ILogin) => Promise<void>;
  loginByOption: (option: string) => Promise<void>;
}
