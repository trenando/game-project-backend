import { Token } from "../../model/Token";
import { LOGOUT_SUCCESS, AUTH_ERROR } from "../../response-constants/auth";
import { userIdDecoder } from "../../token/verifyToken";
import { Logout } from "./authTypes";

export const logout: Logout = async (req, res) => {
  try {
    await Token.deleteOne({ _id: userIdDecoder(req.headers.token) });
    return res.status(200).send(LOGOUT_SUCCESS);
  } catch (err) {
    if (err.response.status === 401) {
      return res.status(401).send(AUTH_ERROR);
    } else return res.status(400).send(`Непредвиденная ошибка: ${err}`);
  }
};
