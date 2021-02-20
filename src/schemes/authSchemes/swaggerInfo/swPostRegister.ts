import schema from "../registerSchema";

export const swPostRegister = {
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
