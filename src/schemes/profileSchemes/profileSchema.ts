import Joi from "joi";
import J2S from "joi-to-swagger";

const profileSchema = Joi.object().keys({
  login: Joi.string().required().example("somelogin"),
  name: Joi.string().required().example("somename"),
  surname: Joi.string().example("somesurname"),
  gender: Joi.string().example("male/female"),
  age: Joi.number().example(42),
  postCount: Joi.number().required().example(3),
  subCount: Joi.number().required().example(1),
});

const schema = J2S(profileSchema).swagger;

export default schema;
