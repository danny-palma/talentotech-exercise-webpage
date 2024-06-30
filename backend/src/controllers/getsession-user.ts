import { Request, Response } from "express";
import { GetUserBasicInfo } from "../sql/queries";

export async function getSessionUser(req: Request, res: Response) {
  res
    .status(200)
    .json(await GetUserBasicInfo("ec3414b9-d7f9-4775-b6c6-ff3e4fe94b11"));
}
