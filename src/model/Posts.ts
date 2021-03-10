import mongoose from "mongoose";
import { PostsSchema } from "./modelTypes";
import { User } from "./User";

const postsSchema: mongoose.Schema<PostsSchema> = new mongoose.Schema({
  postTitle: {
    type: String,
    required: true,
  },
  postText: {
    type: String,
    required: true,
  },
  user: {
    _id: {
      type: mongoose.Types.ObjectId,
      ref: User,
      required: true,
    },
    login: {
      type: String,
      required: true,
    },
  },
  date: {
    type: Date,
    required: true,
  },
});

export const Posts: mongoose.Model<PostsSchema> = mongoose.model("Posts", postsSchema);
