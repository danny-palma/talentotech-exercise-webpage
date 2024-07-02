import { Request, Response } from "express";

export async function RouteNotFound(req: Request, res: Response) { 
  res.status(404).json({message: `Error 404 route ${req.url} not found`})
}