import { Request, Response } from "express";
import * as core from "express-serve-static-core";
import { IncomingHttpHeaders } from "http";

export type Profile = (req: Request<core.ParamsDictionary, Response, IncomingHttpHeaders, core.Query>, res: Response) => Promise<any>;