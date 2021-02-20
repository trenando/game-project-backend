import { swDeleteLogout } from "../../schemes/authSchemes/swaggerInfo/swDeleteLogout";
import { swPostLogin } from "../../schemes/authSchemes/swaggerInfo/swPostLogin";
import { swPostRegister } from "../../schemes/authSchemes/swaggerInfo/swPostRegister";
import { swPostToken } from "../../schemes/authSchemes/swaggerInfo/swPostToken";

export const swAuthRoutes = {
  "/login": {
    post: {
      ...swPostLogin,
    },
  },
  "/register": {
    post: {
      ...swPostRegister,
    },
  },
  "/logout": {
    delete: {
      ...swDeleteLogout,
    },
  },
  "/token":{
    post:{
      ...swPostToken
    }
  }
};
