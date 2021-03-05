import schema from "../registerSchema";

export const swaggerPostRegister = {
  tags: ["auth"],
  operationId: "register",
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
      description: "OK",
    },
    "400": {
      description: "Bad Request",
    },
  },
};
