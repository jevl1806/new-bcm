import type { IRegister } from "../models";
import type { IRegisterRepository } from "../repository";

export function RegisterUseCase(registerRepository: IRegisterRepository) {
  async function registerUser(infoRegister: IRegister): Promise<void> {
    try {
      await registerRepository.register(infoRegister);
    } catch (error) {
      throw new Error("[UseCase]: Cannot register the user");
    }
  }

  return {
    registerUser,
  };
}
