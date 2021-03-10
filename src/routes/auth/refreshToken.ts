import jwt from "jsonwebtoken";
import { Token } from "../../model/Token";
import { TokenSchema } from "../../model/modelTypes";
import { generateToken, setCustomMin } from "../../token/generateToken";
import { RefreshToken } from "./authTypes";
import { AUTH_ERROR, BAD_TOKEN } from "../../response-constants/auth";
import { userIdDecoder } from "../../userIdDecoder";

export const refreshToken: RefreshToken = async (req, res) => {

    const refreshAuthToken: string = req.body.refreshToken;
    if (!refreshAuthToken) return res.status(401).send(AUTH_ERROR);

    const userToken: TokenSchema | null = await Token.findOne({ _id: userIdDecoder(refreshAuthToken) });
    if (!userToken) return res.status(403).send(BAD_TOKEN);

    await Token.updateOne({ _id: userToken._id }, {
        $set: {
            token: generateToken({ _id: userToken._id }),
            expireAt: setCustomMin(10),
            createdAt: Date()
        }
    });

    try {
        jwt.verify(refreshAuthToken, process.env.ACCESS_TOKEN_REFRESH as string);
        return res.json({ accessToken: userToken.token });
    } catch {
        return res.status(403).send(BAD_TOKEN);
    };
};