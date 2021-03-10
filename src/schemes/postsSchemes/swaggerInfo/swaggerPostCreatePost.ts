import schema from "../createPostSchema";

export const swaggerPostCreatePost = {
  tags: ["posts"],
  operationId: "item",
  security: [
    {
      bearerAuth: [],
    },
  ],
  parameters: [
    {
      in: "body",
      name: "body",
      schema: {
        ...schema,
      },
    },
  ],
  responses: {
    "201": {
      description: "Post created",
    },
    "400": {
      description: "Bad Request",
    },
    "401": {
      description: "Not authorized",
    },
  },
};
