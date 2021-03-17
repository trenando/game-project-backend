import schema from "../postsListSchema";

export const swaggerGetPosts = {
  tags: ["posts"],
  operationId: "list",
  parameters: [
    {
      in: "query",
      name: "page",
      required: true,
      schema: {
        type: "string",
      },
      example: "page=1",
      default: "page=1"
    },
    {
      in: "query",
      name: "limit",
      required: true,
      schema: {
        type: "string",
      },
      example: "limit=10",
      default: "limit=10"
    },
  ],
  responses: {
    "200": {
      description: "OK",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              postsCount:{
                type: "number"
              },
              posts:{
                type: schema.type,
                items: {
                  ...schema.items,
                }
              }
            }
          },
        },
      },
    },
    "400": {
      description: "Bad Request",
    },
  },
};
