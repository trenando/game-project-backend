import { Posts } from "../../model/Posts";
import { AUTH_ERROR } from "../../response-constants/auth";
import { User } from "../../model/User";
import { createPostValidation } from "../../schemes/validation/postsValidation/postsValidation";
import { CreatePost, PostsValidationError } from "./postsTypes";
import { PostsSchema, UserSchema } from "../../model/modelTypes";
import { POSTS_CREATED } from "../../response-constants/posts";
import { userIdDecoder } from "../../userIdDecoder";

export const createPost: CreatePost = async (req, res) => {
  const { error }: PostsValidationError = createPostValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user: UserSchema | null = await User.findOne({ _id: userIdDecoder(req.headers.token) });
  if (!user) return res.status(401).send(AUTH_ERROR);

  const post: PostsSchema = new Posts({
    postTitle: req.body.postTitle,
    postText: req.body.postText,
    user: user,
    date: Date.now(),
  });

  try {
    await post.save();
    return res.status(201).send(POSTS_CREATED);
  } catch (err) {
    return res.status(400).send(`Неудачный запрос: ${err}`);
  }
};
