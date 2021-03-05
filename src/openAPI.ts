import { swaggerAuthRoutes } from "./routes/auth/swaggerAuthRoutes";
import { swaggerProfileRoutes } from "./routes/profile/swaggerProfileRoutes";
import { swaggerPostsRoutes } from "./routes/posts/swaggerPostsRoutes";
import loginSchema from "./schemes/authSchemes/loginSchema";
import registerSchema from "./schemes/authSchemes/registerSchema";
import profileSchema from "./schemes/profileSchemes/profileSchema";
import { postsListSchema } from "./schemes/postsSchemes/postsListSchema";

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
    ...swaggerAuthRoutes,
    ...swaggerProfileRoutes,
    ...swaggerPostsRoutes,
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
      Posts: {
        ...postsListSchema,
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
