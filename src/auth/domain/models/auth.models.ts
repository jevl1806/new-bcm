export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister extends ILogin {
  [key: string]: any;
  name: string;
  lastName: string;
}
