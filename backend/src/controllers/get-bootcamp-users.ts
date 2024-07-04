import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { v4 as uuidv4 } from "uuid"; 
import { CreateNewNota, GetBootcampUsers } from "../sql/queries";

export async function getBootcampUsers(req: Request, res: Response) {
  const {id_bootcamp} = req.query;
  const errors = validationResult(req);
  if (!errors.isEmpty() || !id_bootcamp ) {
    return res
      .status(400)
      .json({ message: "Bad request", errors: errors.array() });
  }
  const result = await GetBootcampUsers(id_bootcamp.toString());
  return res.json(result);
}
