import { Posts } from "../../model/Posts";
import { POSTS_NOT_FOUND } from "../../response-constants/posts";
import { customDate } from "../../customDate";

export const getPostById = async (req: any, res: any) => {
  const post = await Posts.findOne({ _id: req.params.postId });
  if (!post) return res.status(400).send(POSTS_NOT_FOUND);

  const postById = {
    postTitle: post.postTitle,
    postText: post.postText,
    login: post.user.login,
    date: customDate(post.date),
  };
  try {
    res.status(200).json(postById);
  } catch (err) {
    res.status(400).send(`Неудачный запрос ${err}`);
  }
};
