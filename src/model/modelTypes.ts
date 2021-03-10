import mongoose from "mongoose";

export interface UserSchema extends mongoose.Document {
  login: string;
  email: string;
  password: string;
  name: string;
  surname?: string;
  gender?: string;
  age?: number;
  postCount: number;
  subCount: number;
}

export interface TokenSchema extends mongoose.Document {
  _id: mongoose.Types.ObjectId;
  token: string;
  refreshToken: string;
  expireAt: string;
  createdAt: string;
}

export interface PostsSchema extends mongoose.Document {
  postId: mongoose.Types.ObjectId;
  postTitle: string;
  postText: string;
  user: UserSchema;
  date: Date;
}
