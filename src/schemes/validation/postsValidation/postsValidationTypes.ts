import Joi from "joi";

type CreatePostData = {
  postTitle: string;
  postText: string;
};

export type CreatePostValidation = (data: CreatePostData) => Joi.ValidationResult;
