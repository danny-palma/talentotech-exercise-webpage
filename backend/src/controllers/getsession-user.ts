import { Request, Response } from "express";
import { GetUserBasicInfo } from "../sql/queries";

export async function getSessionUser(req: Request, res: Response) {
  res
    .status(200)
    .json(await GetUserBasicInfo("bf6492d1-e2fa-4b67-8d61-dcc09be2f344"));
}
