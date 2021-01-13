import { Request, Response } from "express";
import * as core from "express-serve-static-core";
import { IncomingHttpHeaders } from "http";

type ProfileReponse = {
    login: string,
    name: string,
    postCount: number,
    subCount: number
} | string;

export type Profile = (req: Request<core.ParamsDictionary, ProfileReponse, IncomingHttpHeaders, core.Query>, res: Response<ProfileReponse>) => Promise<Response<ProfileReponse>>;