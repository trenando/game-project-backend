export type SwaggerLoginSchema = {
  email: string;
  password: string;
};

export type SwaggerRegisterSchema = {
  login: string;
  email: string;
  password: string;
  name: string;
  surname?: string;
  gender?: string;
  age?: number;
};
