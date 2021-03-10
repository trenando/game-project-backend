import bcrypt from "bcrypt";
import { UserSchema } from "../../model/modelTypes";
import { User } from "../../model/User";
import { EMAIL_ERROR, REGISTRATION_SUCCESS, USER_EXIST_ERROR } from "../../response-constants/auth";
import { registerValidation } from "../../schemes/validation/authValidation/authValidation";
import { Register, RegisterValidationError } from "./authTypes";

export const register: Register = async (req, res) => {
  const { error }: RegisterValidationError = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const emailExist: UserSchema | null = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send(EMAIL_ERROR);

  const userExist: UserSchema | null = await User.findOne({ login: req.body.login });
  if (userExist) return res.status(400).send(USER_EXIST_ERROR);

  // Хэш пароль
  const salt: string = await bcrypt.genSalt(10);
  const hashedPassword: string = await bcrypt.hash(req.body.password, salt);

  const user: UserSchema = new User({
    login: req.body.login,
    email: req.body.email,
    password: hashedPassword,
    name: req.body.name,
    surname: req.body.surname,
    gender: req.body.gender,
    age: req.body.age,
    postCount: 0,
    subCount: 0,
  });

  try {
    await user.save();
    return res.status(201).send(REGISTRATION_SUCCESS);
  } catch (err) {
    return res.status(400).send(`Непредвиденная ошибка: ${err}`);
  }
};
