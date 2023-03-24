import { ErrorsCode, ValidationError } from "@/common/errors";
import type { ILogin } from "../models";
import type { ILoginRepository } from "../repository";

export function LoginUseCase(loginRepository: ILoginRepository) {
  async function login(data: ILogin) {
    try {
      if (!data.password)
        throw new ValidationError(
          "[Domain]: the password is required",
          ErrorsCode.PasswordIncomplete
        );

      await loginRepository.login(data);
    } catch (error) {
      throw new Error(`[UseCase]: Login failed by ${error}`);
    }
  }

  async function loginByOption(option: string) {
    try {
      await loginRepository.loginByOption(option);
    } catch (error) {
      console.log(error);
    }
  }

  return {
    login,
    loginByOption,
  };
}
