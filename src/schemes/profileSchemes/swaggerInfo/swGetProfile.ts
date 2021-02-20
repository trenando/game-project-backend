import schema from "../profileSchema";

export const swGetProfile = {
  tags: ["user"],
  operationId: "profile",
  security: [
    {
      bearerAuth: [],
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
    "401": {
      description: "Not authorized",
    },
  },
};
