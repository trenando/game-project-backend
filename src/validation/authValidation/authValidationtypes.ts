import Joi from 'joi';

export type RegisterValidationData = {
    name: string,
    email: string,
    password: string
};

export type LoginValidationData = {
    email: string,
    password: string
};

export type RegisterValidation = (data: RegisterValidationData) => Joi.ValidationResult;
export type LoginValidation = (data: LoginValidationData) => Joi.ValidationResult;