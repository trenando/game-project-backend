import mongoose from "mongoose";
import { TokenSchema } from "./modelTypes";

const tokenSchema: mongoose.Schema<TokenSchema> = new mongoose.Schema({
    token: {
        type: String,
        required: true
    },
    refreshToken: {
        type: String,
        required: true
    },
    expireAt: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        required: true
    }
});

export const Token: mongoose.Model<TokenSchema> = mongoose.model("Token", tokenSchema);