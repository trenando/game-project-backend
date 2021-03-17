import Joi from "joi";
import J2S from "joi-to-swagger";

const arraySchema = Joi.array().items(
  Joi.object().keys({
    postId: Joi.string().required().example("1"),
    postTitle: Joi.string().required().min(5).max(30).example("some title"),
    login: Joi.string().required().example("some login"),
    date: Joi.string().required().example("05.02.2021 12:10 "),
  })
);

const postsSchema = Joi.object().keys({
  postsCount: Joi.number().required().example(1410),
  posts: arraySchema
})

export const postsListSchema = J2S(postsSchema).swagger;

const schema = J2S(arraySchema).swagger;

export default schema;
