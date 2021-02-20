export const swDeleteLogout = {
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
    "401": {
      description: "Not authorized",
    },
  },
};
