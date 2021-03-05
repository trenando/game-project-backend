import { PostsArray, PostsList } from "./postsTypes";
import { Posts } from "../../model/Posts";
import { POSTS_DATABASE_ERROR } from "../../response-constants/posts";
import { PostsSchema } from "../../model/modelTypes";

export const postsList: PostsList = async (req, res) => {
  const page: number = req.query.page;
  const limit: number = req.query.limit;

  const postsCount: number | null = await Posts.find().countDocuments();

  const sortedPosts: PostsSchema[] = await Posts.find()
    .sort({ date: -1 })
    .skip((page - 1) * limit)
    .limit(limit);

  if (!sortedPosts.length || !postsCount) return res.status(400).send(POSTS_DATABASE_ERROR);

  const posts: PostsArray = sortedPosts.map((el: PostsSchema) => {
    return {
      postId: el._id,
      title: el.title,
      login: el.user.login,
      date: el.date,
    };
  });

  try {
    return res.status(200).json({ postsCount, posts });
  } catch (err) {
    return res.status(400).send(`Неудачный запрос: ${err}`);
  }
};
