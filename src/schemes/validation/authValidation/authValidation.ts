import Joi from "joi";
import { RegisterValidation, LoginValidation, LoginValidationData } from "./authValidationTypes";
import { UserSchema } from "../../../model/modelTypes";

export const registerValidation: RegisterValidation = (data) => {
  const schema: Joi.ObjectSchema<UserSchema> = Joi.object({
    login: Joi.string().required().min(3).max(64),
    email: Joi.string().required().max(64).email(),
    password: Joi.string().required().min(8).max(128),
    name: Joi.string().required().min(2).max(64),
    surname: Joi.string().min(2).max(64),
    gender: Joi.string(),
    age: Joi.string()
  });
  return schema.validate(data);
};

export const loginValidation: LoginValidation = (data) => {
  const schema: Joi.ObjectSchema<LoginValidationData> = Joi.object({
    email: Joi.string().max(64).required().email(),
    password: Joi.string().min(8).max(128).required(),
  });
  return schema.validate(data);
};
