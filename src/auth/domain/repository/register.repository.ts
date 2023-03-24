import type { IRegister } from "../models";

export interface IRegisterRepository {
  register: (infoRegister: IRegister) => Promise<void>;
}
