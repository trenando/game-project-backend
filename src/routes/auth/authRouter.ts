import Express, { Router } from "express";
import { verify } from "../../token/verifyToken";
import { register } from "./register";
import { login } from "./login";
import { logout } from "./logout";
import { postRefreshToken } from "./refreshToken";

const authRouter: Router = Express.Router();

authRouter.post("/register", register);

authRouter.post("/login", login);

authRouter.post("/token", postRefreshToken);

authRouter.delete("/logout", verify, logout);

export default authRouter;