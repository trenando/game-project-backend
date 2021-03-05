import schema from "../loginSchema";

export const swaggerPostLogin = {
  tags: ["auth"],
  operationId: "login",
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
              refreshToken: {
                type: "string",
                enum: [
                  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmRjMjg1ZmM2OTk1ZTBmZTAxOGZlMWUiLCJpYXQiOjE2MDg0MzU5MjB9.U93_wqFcW95Rzf-gJakrq8mjsqwgrKpEBO34n6Kv3v8",
                ],
              },
            },
          },
        },
      },
    },
    "400": {
      description: "Bad Request",
    },
  }
};
