import type { ILogin } from "@/auth/domain/models";
import type { ILoginRepository } from "@/auth/domain/repository";
import { setItem } from "@/common/services";
import { LoginDefaultMock } from "./fakeApi.mock";

export function LoginImplement(): ILoginRepository {
  const handleExternalLogin: { [key: string]: any } = {
    optionOne: async () => {
      console.log("This option can be facebook, google or instagram");
    },
  };

  async function login({ email, password }: ILogin) {
    try {
      await LoginDefaultMock({ email, password });
      setItem({
        property: "localStorage",
        key: "isAuthenticated",
        value: "true",
      });
    } catch (error) {
      throw new Error(`[Service]: Login failed by ${error}`);
    }
  }

  async function loginByOption(option: string) {
    try {
      const _login = handleExternalLogin[option];
      await _login();
    } catch (error) {
      throw new Error("[Service]: Login with option has failed");
    }
  }

  return {
    login,
    loginByOption,
  };
}
