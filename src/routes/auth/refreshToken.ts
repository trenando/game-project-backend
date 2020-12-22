import jwt from "jsonwebtoken";
import { Token } from "../../model/Token";
import { userIdDecoder } from "../../token/verifyToken";
import { generateToken, expireMin } from "../../token/generateToken";

export const postRefreshToken = async (req: any, res: any) => {

    const refreshToken = req.body.refreshToken;
    if (!refreshToken) return res.status(401).send("You are not authorized");

    const userToken: any = await Token.findOne({ _id: userIdDecoder(refreshToken) });
    if (!userToken) return res.status(403).send("Invalid token");

    await Token.updateOne({ _id: userToken._id }, {
        $set: {
            token: generateToken({ _id: userToken._id }),
            expireAt: expireMin(10),
            createdAt: Date()
        }
    });

    try {
        jwt.verify(refreshToken, process.env.ACCESS_TOKEN_REFRESH as string);
        return res.json({ accessToken: userToken.token }).send();
    } catch (err) {
        return res.status(403).send("invalid token");
    };
};