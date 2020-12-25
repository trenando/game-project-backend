import { Token } from "../../model/Token";
import { userIdDecoder } from "../../token/verifyToken";
import { Logout } from "./authTypes";

export const logout: Logout = async (req, res) => {
    try {
        await Token.deleteOne({ _id: userIdDecoder(req.headers.token) });
        return res.status(200).send("Logout was successfull");
    } catch {
        return res.status(401).send("You are not authorized");
    };
};