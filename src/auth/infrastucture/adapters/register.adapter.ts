import type { IRegister } from "@/auth/domain/models";

export interface IRegisterDTO {
  name: string;
  lastName: string;
  mail: string;
  pass: string;
}

export const registerAdapter = {
  domainFromDTO: (register: IRegister): IRegisterDTO => ({
    name: register.name,
    lastName: register.lastName,
    mail: register.email,
    pass: register.password,
  }),
  DTOFromDomain: (registerDTO: IRegisterDTO): IRegister => ({
    email: registerDTO.mail,
    lastName: registerDTO.lastName,
    name: registerDTO.name,
    password: registerDTO.pass,
  }),
};
