import jwt from "jsonwebtoken";
import { GenerateToken, ExpireMin } from "./tokenTypes";

export const generateToken: GenerateToken = (userId) => {
    return jwt.sign(userId, process.env.ACCESS_TOKEN_SECRET as string, { expiresIn: "1s" });
};

export const generateRefreshToken: GenerateToken = (userId) => {
    return jwt.sign(userId, process.env.ACCESS_TOKEN_REFRESH as string);
};

export const expireMin: ExpireMin = (minutes) => {
    const copiedDate = new Date();
    copiedDate.setTime(copiedDate.getTime() + (minutes * 60 * 1000));
    return copiedDate;
} 