import { swaggerGetProfile } from "../../schemes/profileSchemes/swaggerInfo/swaggerGetProfile";

export const swaggerProfileRoutes = {
  "/profile": {
    get: {
      ...swaggerGetProfile,
    },
  },
};
