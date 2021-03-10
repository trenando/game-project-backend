import { swaggerGetPosts } from "../../schemes/postsSchemes/swaggerInfo/swaggerGetPostsList";
import { swaggerPostCreatePost } from "../../schemes/postsSchemes/swaggerInfo/swaggerPostCreatePost";

export const swaggerPostsRoutes = {
  "/list": {
    get: {
      ...swaggerGetPosts,
    },
  },
  "/item": {
    post: {
      ...swaggerPostCreatePost
    },
  },
};
