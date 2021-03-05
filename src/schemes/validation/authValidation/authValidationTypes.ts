import Joi from "joi";
import { UserSchema } from "../../../model/modelTypes";

export type LoginValidationData = {
  email: string;
  password: string;
};

export type RegisterValidation = (data: UserSchema) => Joi.ValidationResult;
export type LoginValidation = (data: LoginValidationData) => Joi.ValidationResult;
