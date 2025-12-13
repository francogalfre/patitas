import type { Request, Response } from "express";
import * as profileService from "../services/user.service";
import { HTTP_STATUS, sendError, sendSuccess } from "../utils/response";

import {
  ProfileEditBioPayloadSchema,
  ProfileEditPayloadSchema,
  type ProfileEditBioPayload,
  type ProfileEditPayload,
} from "../schemas/profile.schema";
import { ZodError } from "zod";

export const getProfileByIdHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return sendError(
        res,
        "El identificador del usuario es requerido.",
        HTTP_STATUS.INTERNAL_SERVER_ERROR
      );
    }

    const response = await profileService.getProfileById(id);

    sendSuccess(res, response, "Perfil del usuario recuperado");
  } catch (error) {
    console.error(error);
    sendError(
      res,
      "No fue posible encontrar al usuario",
      HTTP_STATUS.INTERNAL_SERVER_ERROR
    );
  }
};

export const updateProfileBioHandler = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    const id = req.params.id;

    const validatedData: ProfileEditBioPayload =
      ProfileEditBioPayloadSchema.parse(req.body);

    const bio = validatedData.bio;

    if (!userId) {
      return sendError(
        res,
        "Usuario no autenticado.",
        HTTP_STATUS.UNAUTHORIZED
      );
    }

    if (!id) {
      return sendError(
        res,
        "El identificador del usuario es requerido.",
        HTTP_STATUS.INTERNAL_SERVER_ERROR
      );
    }

    if (bio === "") {
      return sendError(
        res,
        "La biografia no puede estar vacia",
        HTTP_STATUS.INTERNAL_SERVER_ERROR
      );
    }

    const newProfile = await profileService.updateProfileBio(id, bio, userId);

    sendSuccess(
      res,
      newProfile,
      "La biografia del usuario fue editada con exito."
    );
  } catch (error) {
    if (error instanceof ZodError) {
      console.error("DEBUG ZOD ERROR:", error);

      return sendError(
        res,
        "Validación fallida. Revise los detalles de la validación.",
        HTTP_STATUS.BAD_REQUEST,
        error.issues
      );
    }

    sendError(res, "Error al editar la biografia del usuario");
  }
};

export const updateProfileHandler = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    const id = req.params.id;

    const validatedData: ProfileEditPayload = ProfileEditPayloadSchema.parse(
      req.body
    );

    const { fullName, email } = validatedData;

    if (!userId) {
      return sendError(
        res,
        "Usuario no autenticado.",
        HTTP_STATUS.UNAUTHORIZED
      );
    }

    if (!id) {
      return sendError(
        res,
        "El identificador del usuario es requerido.",
        HTTP_STATUS.INTERNAL_SERVER_ERROR
      );
    }

    const newProfile = await profileService.updateProfile(
      id,
      fullName,
      email,
      userId
    );

    sendSuccess(res, newProfile, "El perfil fue editado con exito.");
  } catch (error) {
    if (error instanceof ZodError) {
      console.error("DEBUG ZOD ERROR:", error);

      return sendError(
        res,
        "Validación fallida. Revise los detalles de la validación.",
        HTTP_STATUS.BAD_REQUEST,
        error.issues
      );
    }

    sendError(res, "Error al editar el usuario");
  }
};

export const deleteProfileHandler = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const userId = req.user?.id;

    if (!userId) {
      return sendError(
        res,
        "Usuario no autenticado.",
        HTTP_STATUS.UNAUTHORIZED
      );
    }

    if (!id) {
      if (!id) {
        return sendError(
          res,
          "El identificador del usuario es requerido.",
          HTTP_STATUS.BAD_REQUEST
        );
      }
    }

    const profile = await profileService.deleteProfile(id, userId);

    sendSuccess(res, profile, "El perfil fue eliminada con exito.");
  } catch (error) {
    sendError(res, "Error al dar de baja al usuario.");
  }
};
