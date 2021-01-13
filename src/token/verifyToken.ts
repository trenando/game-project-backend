import jwt from "jsonwebtoken";
import "../config";
import { Token } from "../model/Token";
import { UserIdDecoder, VerifyType, UserToken } from "./tokenTypes";

export const verify: VerifyType = async (req, res, next) => {
    const userToken: UserToken | null = await Token.findOne({ _id: userIdDecoder(req.headers.token) });
    if (!userToken) return res.status(401).send("Access denied");

    try {
        jwt.verify(userToken.token, process.env.ACCESS_TOKEN_SECRET as string);
        next();
    } catch {
        return res.status(403).send("Access denied, refresh your token");
    };
};

export const userIdDecoder: UserIdDecoder = (token) => {
    if (!token) return "";
    const decodedId = Buffer.from(token.split(" ")[1].split(".")[1], "base64").toString("binary");
    return JSON.parse(decodedId)._id;
};