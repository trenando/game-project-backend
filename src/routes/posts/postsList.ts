import { PostsArray, PostsList } from "./postsTypes";
import { Posts } from "../../model/Posts";
import { PostsSchema } from "../../model/modelTypes";
import { customDate } from "../../customDate";

export const postsList: PostsList = async (req, res) => {
  let page: number = parseInt(req.query.page);
  let limit: number = parseInt(req.query.limit);
  if (isNaN(page)) page = 1;
  if (isNaN(limit)) limit = 10;

  try {
    const postsCount: number = await Posts.find().countDocuments();
    const sortedPosts: PostsSchema[] = await Posts.find()
      .sort({ date: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    const posts: PostsArray = sortedPosts.map((el: PostsSchema) => {
      return {
        postId: el._id,
        postTitle: el.postTitle,
        login: el.user.login,
        date: customDate(el.date),
      };
    });
    return res.status(200).json({ postsCount, posts });
  } catch (err) {
    return res.status(400).send(`Возникла ошибка: ${err}`);
  }
};
