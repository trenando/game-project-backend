import mongoose from "mongoose";

export interface IUser extends mongoose.Document {
    login: string,
    email: string,
    password: string,
    name: string,
    surname?: string,
    gender?: string,
    age?: number,
    postCount: number,
    subCount: number
};

export interface UserSchema extends mongoose.Document {
    login: string,
    email: string,
    password: string,
    name: string,
    surname?: string,
    gender?: string,
    age?: number,
    postCount: number,
    subCount: number
};

export interface IToken extends mongoose.Document {
    _id: mongoose.Types.ObjectId,
    token: string,
    refreshToken: string,
    expireAt: string,
    createdAt: string,
};

export interface TokenSchema extends mongoose.Document {
    _id: mongoose.Types.ObjectId,
    token: string,
    refreshToken: string,
    expireAt: string,
    createdAt: string,
};