import type { Response } from "express";
import type { ZodError, ZodIssue } from "zod";

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
};

export const sendSuccess = (
  res: Response,
  data: any,
  message: string = "Operación exitosa",
  statusCode: number = HTTP_STATUS.OK
) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

export const sendError = (
  res: Response,
  message: string = "Error interno del servidor",
  statusCode: number = HTTP_STATUS.INTERNAL_SERVER_ERROR,
  details: ZodIssue[] | null = null
) => {
  return res.status(statusCode).json({
    success: false,
    message: message,
    data: details,
  });
};
