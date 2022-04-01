import { Token } from "../../model/Token";
import { LOGOUT_SUCCESS } from "../../response-constants/auth";
import { userIdDecoder } from "../../userIdDecoder";
import { Logout } from "./authTypes";

export const logout: Logout = async (req, res) => {
  try {
    await Token.deleteOne({ _id: userIdDecoder(req.headers.token) });
    return res.status(200).send(LOGOUT_SUCCESS);
  } catch (err) { 
    return res.status(400).send(`Непредвиденная ошибка: ${err}`);
  }
};
