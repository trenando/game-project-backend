import jwt from "jsonwebtoken";
import "../config";
import { Token } from "../model/Token";
import { UserIdDecoder } from "./tokenTypes";

export const verify = async (req: any, res: any, next: any) => {
    const userToken: any = await Token.findOne({ _id: userIdDecoder(req.headers.token) });
    if (!userToken) return res.status(401).send("Access denied");

    try {
        const verified = jwt.verify(userToken.token, process.env.ACCESS_TOKEN_SECRET as string);
        req.user = verified;
        next();
    } catch {
        return res.status(403).send("Invalid token");
    };
};

export const userIdDecoder: UserIdDecoder = (token) => {
    const decodedId = Buffer.from(token.split('.')[1], "base64").toString("binary");
    return JSON.parse(decodedId)._id;
};