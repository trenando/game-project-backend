import mongoose from "mongoose";
import { UserSchema } from "./modelTypes";

const userSchema: mongoose.Schema<UserSchema> = new mongoose.Schema({
  login: {
    type: String,
    required: true,
    min: 3,
    max: 64,
  },
  email: {
    type: String,
    required: true,
    max: 64,
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 128,
  },
  name: {
    type: String,
    min: 2,
    max: 64,
    required: true,
  },
  surname: {
    type: String,
    min: 2,
    max: 64,
  },
  gender: {
    type: String,
  },
  age: {
    type: Number,
  },
  postCount: {
    type: Number,
    required: true,
  },
  subCount: {
    type: Number,
    required: true,
  },
});

export const User: mongoose.Model<UserSchema> = mongoose.model("User", userSchema);
