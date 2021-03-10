import Joi from "joi";
import J2S from "joi-to-swagger";

const createPostSchema = Joi.object().keys({
  postTitle: Joi.string().required().min(5).max(30).example("My first title"),
  postText: Joi.string().required().example("Make it bigger than you see now :)"),
});

const schema = J2S(createPostSchema).swagger;

export default schema;
