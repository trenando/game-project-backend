import { swaggerDeleteLogout } from "../../schemes/authSchemes/swaggerInfo/swaggerDeleteLogout";
import { swaggerPostLogin } from "../../schemes/authSchemes/swaggerInfo/swaggerPostLogin";
import { swaggerPostRegister } from "../../schemes/authSchemes/swaggerInfo/swaggerPostRegister";
import { swaggerPostToken } from "../../schemes/authSchemes/swaggerInfo/swaggerPostToken";

export const swaggerAuthRoutes = {
  "/login": {
    post: {
      ...swaggerPostLogin,
    },
  },
  "/register": {
    post: {
      ...swaggerPostRegister,
    },
  },
  "/logout": {
    delete: {
      ...swaggerDeleteLogout,
    },
  },
  "/token":{
    post:{
      ...swaggerPostToken
    }
  }
};
