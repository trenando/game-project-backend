export const swaggerDeleteLogout = {
  tags: ["auth"],
  operationId: "logout",
  security: [
    {
      bearerAuth: [],
    },
  ],
  parameters: [
    {
      in: "body",
      name: "body",
    },
  ],
  responses: {
    "200": {
      description: "OK",
    },
    "400": {
      description: "Bad request",
    },
    "401": {
      description: "Not authorized",
    },
  },
};
