import Express, { Router } from "express";
import { verify } from "../../token/verifyToken";
import { profile } from "./profile";

const userRoutes: Router = Express.Router();

userRoutes.get("/profile", verify, profile);

export default userRoutes;