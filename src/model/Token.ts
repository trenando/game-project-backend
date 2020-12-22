import mongoose from "mongoose";

const tokenSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        required: true
    },
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

export const Token = mongoose.model("Token", tokenSchema);