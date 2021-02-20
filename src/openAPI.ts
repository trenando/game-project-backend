import { swAuthRoutes } from "./routes/auth/swAuthRoutes";
import { swProfileRoutes } from "./routes/profile/swProfileRoutes";
import loginSchema from "./schemes/authSchemes/loginSchema";
import registerSchema from "./schemes/authSchemes/registerSchema";
import profileSchema from "./schemes/profileSchemes/profileSchema";

export const swagger = {
  openapi: "3.0.0",
  info: {
    title: "My Backend Project API",
    version: "1.0.0",
    description: "Application API",
  },
  servers: [
    {
      url: "http://localhost:4000",
      description: "Development server",
    },
  ],
  paths: {
    ...swAuthRoutes,
    ...swProfileRoutes,
  },
  components: {
    schemas: {
      Login: {
        ...loginSchema,
      },
      Register: {
        ...registerSchema,
      },
      Profile: {
        ...profileSchema,
      },
    },
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
};
