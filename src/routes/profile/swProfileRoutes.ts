import { swGetProfile } from "../../schemes/profileSchemes/swaggerInfo/swGetProfile";

export const swProfileRoutes = {
  "/profile": {
    get: {
      ...swGetProfile,
    },
  },
};
