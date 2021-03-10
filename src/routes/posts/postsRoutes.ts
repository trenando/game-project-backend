import express, { Router } from "express";
import { verify } from "../../token/verifyToken";
import { createPost } from "./createPost";
import { postsList } from "./postsList";

const postsRoutes: Router = express.Router();

postsRoutes.get("/list", postsList);

postsRoutes.post("/item", verify, createPost);

export default postsRoutes;
