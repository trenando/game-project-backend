import { Request, Response } from "express";
import * as core from "express-serve-static-core";
import { LoginValidationData } from "../../validation/authValidation/authValidationtypes";
import { IncomingHttpHeaders } from "http";
import Joi from "joi";
import { UserSchema } from "../../model/modelTypes"

type RefreshTokenRequest = {
    refreshToken: string
}

export type Logout = (req: Request<core.ParamsDictionary, Response, IncomingHttpHeaders, core.Query>, res: Response) => Promise<any>;

export type Register = (req: Request<core.ParamsDictionary, Response, UserSchema, core.Query>, res: Response) => Promise<any>;

export interface RegisterValidationError {
    error?: Joi.ValidationError | undefined
};

export type PostRefreshToken = (req: Request<core.ParamsDictionary, Response, RefreshTokenRequest, core.Query>, res: Response) => Promise<any>;

export type Login = (req: Request<core.ParamsDictionary, Response, LoginValidationData, core.Query>, res: Response) => Promise<any>;