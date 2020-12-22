import { Request, Response } from "express";

export type Logout = (req: Request, res: Response) => Promise<any>