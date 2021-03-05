import schema from "../tokenSchema";

export const swaggerPostToken = {
  tags: ["auth"],
  operationId: "token",
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
    "200": {
      description: "OK",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              accessToken: {
                type: "string",
                enum: [
                  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmRjMjg1ZmM2OTk1ZTBmZTAxOGZlMWUiLCJpYXQiOjE2MDg0MzU5MjB9.U93_wqFcW95Rzf-gJakrq8mjsqwgrKpEBO34n6Kv39",
                ],
              },
            },
          },
        },
      },
    },
    "401": {
      description: "Not authorized",
    },
    "403": {
      description: "Invalid token",
    },
  },
};
