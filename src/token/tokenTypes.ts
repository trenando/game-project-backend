import { Response, NextFunction, Request } from "express";
import mongoose from "mongoose";
import * as core from "express-serve-static-core";
import { IncomingHttpHeaders } from "http";

declare module "http" {
    export interface IncomingHttpHeaders {
        token: string | undefined
    }

};

type UserId = {
    _id: mongoose.Types.ObjectId
};

export type UserToken = {
    token: string
};

export type GenerateToken = (userId: UserId) => string;

export type SetCustomMin = (minutes: number) => string;

export type VerifyType = (req: Request<core.ParamsDictionary, Response, IncomingHttpHeaders, core.Query>, res: Response, next: NextFunction) => Promise<any>;