import Joi from "joi";
import J2S from "joi-to-swagger";

const getPostByIdSchema = Joi.object().keys({
  postTitle: Joi.string().required().min(5).max(30).example("My first title"),
  postText: Joi.string().required().example("Make it bigger than you see now :)"),
  login: Joi.string().required().example("some login"),
  date: Joi.string().required().example("05.02.2021 12:10"),
});

const schema = J2S(getPostByIdSchema).swagger;

export default schema;
