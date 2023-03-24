import type { IRegister } from "@/auth/domain/models";
import type { IRegisterRepository } from "@/auth/domain/repository";
import { registerAdapter, type IRegisterDTO } from "../adapters";
import { RegisterDefaultMock } from "./fakeApi.mock";

export function RegisterImplement(): IRegisterRepository {
  async function register(registerInfo: IRegister): Promise<void> {
    try {
      const registerDTO: IRegisterDTO =
        registerAdapter.domainFromDTO(registerInfo);
      await RegisterDefaultMock(registerDTO);
    } catch (error) {
      throw new Error(`[Service]: Promblems at time to create the user`);
    }
  }

  return {
    register,
  };
}
