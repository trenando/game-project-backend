import Joi from "joi";
import J2S from "joi-to-swagger";

const tokenSchema = Joi.object().keys({
  refreshToken: Joi.string()
    .required()
    .example(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmRjMjg1ZmM2OTk1ZTBmZTAxOGZlMWUiLCJpYXQiOjE2MDg0MzU5MjB9.U93_wqFcW95Rzf-gJakrq8mjsqwgrKpEBO34n6Kv3v8"
    ),
});

const schema = J2S(tokenSchema).swagger;

export default schema;
