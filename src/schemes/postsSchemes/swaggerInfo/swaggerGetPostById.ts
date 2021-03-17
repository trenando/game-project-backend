import schema from "../getPostByIdSchema";

export const swaggerGetPostById = {
  tags: ["posts"],
  operationId: "postId",
  parameters: [
    {
      in: "path",
      name: "postId",
      required: true,
      schema: {
        type: "string",
      },
    },
  ],
  responses: {
    "200": {
      description: "OK",
      content: {
        "application/json": {
          schema: {
            type: schema.type,
            properties: {
              ...schema.properties,
            },
          },
        },
      },
    },
    "400": {
      description: "Bad Request",
    },
  },
};
