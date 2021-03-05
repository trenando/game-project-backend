import Joi from "joi";

type CreatePostData = {
  title: string;
  text: string;
};

export type CreatePostValidation = (data: CreatePostData) => Joi.ValidationResult;
