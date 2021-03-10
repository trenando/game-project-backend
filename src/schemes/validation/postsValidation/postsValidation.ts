import Joi from "joi";
import { CreatePostValidation } from "./postsValidationTypes";

export const createPostValidation: CreatePostValidation = (data) => {
  const schema = Joi.object({
    postTitle: Joi.string().required().min(5).max(30),
    postText: Joi.string().required(),
  });
  return schema.validate(data);
};
