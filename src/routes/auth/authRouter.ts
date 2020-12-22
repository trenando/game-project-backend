import Express from "express";
import "../../config";
import { verify } from "../../token/verifyToken";
import { register } from "./register";
import { login } from "./login";
import { logout } from "./logout";
import { postRefreshToken } from "./refreshToken";

const authRouter = Express.Router();

authRouter.post("/register", register);

authRouter.post("/login", login);

authRouter.post("/token", postRefreshToken);

authRouter.delete("/logout", verify, logout);

export default authRouter;