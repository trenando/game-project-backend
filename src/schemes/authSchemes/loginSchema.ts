import Joi from "joi";
import J2S from "joi-to-swagger";
import { SwaggerLoginSchema } from "./authSchemesTypes";

const loginSchema: Joi.ObjectSchema<SwaggerLoginSchema> = Joi.object().keys({
  email: Joi.string().max(64).required().email().example("test@test.ru"),
  password: Joi.string().min(8).max(128).required().example("somepass"),
});

const schema = J2S(loginSchema).swagger;

export default schema;
