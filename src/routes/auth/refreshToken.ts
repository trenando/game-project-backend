import jwt from "jsonwebtoken";
import { Token } from "../../model/Token";
import { IToken } from "../../model/modelTypes";
import { userIdDecoder } from "../../token/verifyToken";
import { generateToken, setCustomMin } from "../../token/generateToken";
import { PostRefreshToken } from "./authTypes";
import { AUTH_ERROR, BAD_TOKEN } from "../../response-constants/auth";

export const postRefreshToken: PostRefreshToken = async (req, res) => {

    const refreshToken: string = req.body.refreshToken;
    if (!refreshToken) return res.status(401).send(AUTH_ERROR);

    const userToken: IToken | null = await Token.findOne({ _id: userIdDecoder(refreshToken) });
    if (!userToken) return res.status(403).send(BAD_TOKEN);

    await Token.updateOne({ _id: userToken._id }, {
        $set: {
            token: generateToken({ _id: userToken._id }),
            expireAt: setCustomMin(10),
            createdAt: Date()
        }
    });

    try {
        jwt.verify(refreshToken, process.env.ACCESS_TOKEN_REFRESH as string);
        return res.json({ accessToken: userToken.token });
    } catch {
        return res.status(403).send(BAD_TOKEN);
    };
};