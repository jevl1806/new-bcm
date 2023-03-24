import type { ILogin } from "@/auth/domain/models";

interface IMockRegister {
  name: string;
  lastName: string;
  mail: string;
  pass: string;
}

export function LoginDefaultMock({ email, password }: ILogin) {
  if (!email) return Promise.reject(new Error("The email is required"));
  if (!password) return Promise.reject(new Error("The  password is required"));

  if (email !== "alternova@test.com" || password !== "alternova") {
    return Promise.reject(new Error("The email or password are incorrect!"));
  }

  return Promise.resolve({ isLogged: true });
}

export async function RegisterDefaultMock(data: IMockRegister) {
  if (!data.pass) return Promise.reject(new Error("The password is required"));
  if (!data.mail) return Promise.reject(new Error("The email is required"));
  return Promise.resolve({ message: "[fake backend]: User registered" });
}
