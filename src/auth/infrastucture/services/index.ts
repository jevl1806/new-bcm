import type {
  ILoginRepository,
  IRegisterRepository,
} from "@/auth/domain/repository";
import { LoginUseCase, RegisterUseCase } from "@/auth/domain/useCases";
import { getItem } from "@/common/services";
import { LoginImplement } from "./login.service";
import { RegisterImplement } from "./register.service";

const loginImplement: ILoginRepository = LoginImplement();
const registerImplement: IRegisterRepository = RegisterImplement();
const { login, loginByOption } = LoginUseCase(loginImplement);
const { registerUser } = RegisterUseCase(registerImplement);

function isAuthenticated() {
  const state = getItem({ property: "localStorage", key: "isAuthenticated" });
  return /true/.test(state);
}

export { login, loginByOption, isAuthenticated, registerUser };
