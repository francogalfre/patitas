import type { Request, Response, NextFunction } from "express";

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.send(401).json({ error: "Unauthorized" });
    }

    const token = authHeader.substring(7);

    // Aca verificamos con better auth

    next();
  } catch (error) {
    next(error);
  }
};
