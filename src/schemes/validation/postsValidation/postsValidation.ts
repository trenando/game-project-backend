import Joi from "joi";
import { CreatePostValidation } from "./postsValidationTypes";

export const createPostValidation: CreatePostValidation = (data) => {
  const schema = Joi.object({
    title: Joi.string().required().min(5).max(30),
    text: Joi.string().required(),
  });
  return schema.validate(data);
};
