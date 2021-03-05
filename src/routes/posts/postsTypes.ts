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
  page: number;
  limit: number;
};

type RequestCreatePost = {
  title: string;
  text: string;
};

export interface PostsValidationError {
  error?: Joi.ValidationError | undefined;
}

export type PostsList = (
  req: Request<core.ParamsDictionary, PostsResponse, IncomingHttpHeaders, PostsQueryParams>,
  res: Response<PostsResponse>
) => Promise<Response<PostsResponse>>;

export type PostsArray = {
  postId: mongoose.Types.ObjectId;
  title: string;
  login: string;
  date: Date;
}[];

export type CreatePost = (
  req: Request<core.ParamsDictionary, string, RequestCreatePost, core.Query>,
  res: Response<string>
) => Promise<Response<string>>;
