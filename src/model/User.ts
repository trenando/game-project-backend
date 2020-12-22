import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    login: {
        type: String,
        required: true,
        min: 3,
        max: 255
    },
    email: {
        type: String,
        required: true,
        max: 255
    },
    password: {
        type: String,
        required: true,
        min: 8,
        max: 1024
    }
});

export const User =  mongoose.model("User", userSchema);