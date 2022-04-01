import { Posts } from "../../model/Posts";
import { POSTS_NOT_FOUND } from "../../response-constants/posts";
import { customDate } from "../../customDate";
import { PostsSchema } from "../../model/modelTypes";

export const getPostById = async (req: any, res: any) => {
  const post: PostsSchema | null = await Posts.findOne({ _id: req.params.postId });
  if (!post) return res.status(400).send(POSTS_NOT_FOUND);

  const { postTitle, postText, user, date } = post;
  const postById = {
    postTitle,postText,
    login: user.login,
    date: customDate(date),
  };
  try {
    res.status(200).json(postById);
  } catch (err) {
    res.status(400).send(`Неудачный запрос ${err}`);
  }
};
