import Joi from "joi";
import J2S from "joi-to-swagger";
import { SwaggerRegisterSchema } from "./authSchemesTypes";

const registerSchema: Joi.ObjectSchema<SwaggerRegisterSchema> = Joi.object().keys({
  login: Joi.string().required().min(3).max(64).example("somelogin"),
  email: Joi.string().required().max(64).email().example("test@test.ru"),
  password: Joi.string().required().min(8).max(128).example("somepass"),
  name: Joi.string().required().min(2).max(64).example("somename"),
  surname: Joi.string().min(2).max(64).example("somesurname"),
  gender: Joi.string().example("male/female"),
  age: Joi.number().example(24),
});

const schema = J2S(registerSchema).swagger;

export default schema;
