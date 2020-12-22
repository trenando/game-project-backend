import Joi from "joi";
import {
    RegisterValidation, LoginValidation,
    LoginValidationData, RegisterValidationData
} from './authValidationtypes';

export const registerValidation: RegisterValidation = (data) => {
    const schema: Joi.ObjectSchema<RegisterValidationData> = Joi.object({
        login: Joi.string().min(3).max(255).required(),
        email: Joi.string().max(255).required().email(),
        password: Joi.string().min(8).max(1024).required()
    });
    return schema.validate(data);
};

export const loginValidation: LoginValidation = (data) => {
    const schema: Joi.ObjectSchema<LoginValidationData> = Joi.object({
        email: Joi.string().max(255).required().email(),
        password: Joi.string().min(8).max(1024).required()
    });
    return schema.validate(data);
};