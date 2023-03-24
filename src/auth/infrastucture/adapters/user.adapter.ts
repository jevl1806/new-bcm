import type { IUser } from "@/auth/domain/models";

export interface IUserDTO {
  name: string;
  lastName: string;
  codeId: string;
}

export const userAdapter = {
  DTOFromDomain: (userDTO: IUserDTO): IUser => ({
    id: userDTO.codeId,
    lastName: userDTO.lastName,
    name: userDTO.name,
  }),
};
