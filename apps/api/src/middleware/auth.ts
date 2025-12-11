import type { Request, Response, NextFunction } from "express";
import { fromNodeHeaders } from "better-auth/node";
import { auth } from "../lib/auth";

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        email: string;
        name: string;
        image?: string | null;
        emailVerified: boolean;
        createdAt: Date;
        updatedAt: Date;
      };
      session?: {
        id: string;
        userId: string;
        expiresAt: Date;
        token: string;
        ipAddress?: string | null;
        userAgent?: string | null;
      };
    }
  }
}

export function authMiddleware(required: boolean = true) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const session = await auth.api.getSession({
        headers: fromNodeHeaders(req.headers),
      });

      if (session?.user && session?.session) {
        req.user = session.user;
        req.session = session.session;
        return next();
      }

      if (required && !session) {
        return res.status(401).json({
          error: "No autorizado",
          message: "Debes iniciar sesión para acceder a este recurso",
        });
      }

      next();
    } catch (error) {
      if (required) {
        return res.status(401).json({
          error: "No autorizado",
          message: "Token de sesión inválido o expirado",
        });
      }

      next();
    }
  };
}
