import { Request, Response } from "express";
import Joi from "joi";
import * as core from "express-serve-static-core";
import { IncomingHttpHeaders } from "http";
import mongoose from "mongoose";

type PostsResponse =
  | {
      postsCount: number;
      posts: PostsArray;
    }
  | string;

type PostsQueryParams = {
  page: string;
  limit: string;
};

interface RequestCreatePost extends IncomingHttpHeaders {
  postTitle: string;
  postText: string;
}

export interface PostsValidationError {
  error?: Joi.ValidationError | undefined;
}

export type PostsList = (
  req: Request<core.ParamsDictionary, PostsResponse, IncomingHttpHeaders, PostsQueryParams>,
  res: Response<PostsResponse>
) => Promise<Response<PostsResponse>>;

export type PostsArray = {
  postId: mongoose.Types.ObjectId;
  postTitle: string;
  login: string;
  date: string;
}[];

export type CreatePost = (
  req: Request<core.ParamsDictionary, string, RequestCreatePost, core.Query>,
  res: Response<string>
) => Promise<Response<string>>;
